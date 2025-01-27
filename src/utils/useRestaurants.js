import React, { useState, useEffect } from "react";

export const useRestaurants = () => {
    const [restaurantsList, setRestaurantsList] = useState([]);
    const [filterRestaurants, setFilterRestaurants] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110"
            );
            const jsonData = await data.json();

            const restaurants =
                jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
                    ?.restaurants || [];

            setRestaurantsList(restaurants);
            setFilterRestaurants(restaurants);
        } catch (error) {
            console.error(error);
        }
    };

    const handleSearch = (serachString) => {
        const filterRes = restaurantsList.filter((res) =>
            res.info.name.toLowerCase().includes(serachString.toLowerCase())
        );
        setFilterRestaurants(filterRes);
    };

    const handleTopResFilter = () => {
        const filterRes = filterRestaurants.filter(
            (res) => res.info.avgRating >= 4
        );
        setFilterRestaurants(filterRes);
    }

    return { filterRestaurants, handleSearch, handleTopResFilter }
}