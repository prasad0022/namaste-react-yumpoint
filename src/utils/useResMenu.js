import React, { useState, useEffect } from "react";

export const useResMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);
    const [resCategories, setResCategories] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.057437&lng=78.9381729&restaurantId=${resId}`
        );
        const jsonData = await data.json();

        const resInfoData = jsonData?.data?.cards[2]?.card?.card?.info;
        const resCategoriesData =
            jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((card) => card?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
        setResInfo(resInfoData);
        setResCategories(resCategoriesData);
    };

    return { resInfo, resCategories };
}