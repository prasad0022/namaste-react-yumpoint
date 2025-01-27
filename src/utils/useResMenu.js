import React, { useState, useEffect } from "react";

export const useResMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);
    const [resMenu, setResMenu] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.057437&lng=78.9381729&restaurantId=${resId}`
        );
        const jsonData = await data.json();

        const resInfoData = jsonData?.data?.cards[2]?.card?.card?.info;
        const resMenuData =
            jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
                ?.card?.card?.itemCards;
        setResInfo(resInfoData);
        setResMenu(resMenuData);
    };

    return { resInfo, resMenu };
}