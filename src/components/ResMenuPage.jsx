import React, { useEffect, useState } from "react";
import ResMenu from "./ResMenu";
import { resMenuData } from "../utils/mockData";

const ResMenuPage = () => {
  const [resInfo, setResInfo] = useState(null);
  const [resMenu, setResMenu] = useState(resMenuData);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.057437&lng=78.9381729&restaurantId=1003414&catalog_qa=undefined&submitAction=ENTER"
    );
    const jsonData = await data.json();

    const resInfoData = jsonData?.data?.cards[2]?.card?.card?.info;
    setResInfo(resInfoData);
  };

  return (
    <div className="res-menu-container" style={{ marginTop: "100px" }}>
      {resInfo === null ? (
        <h1>Loading....</h1>
      ) : (
        <>
          <div className="menu-heading">
            <h1 style={{ color: "rgb(251, 112, 5)" }}>{resInfo?.name}</h1>
            <h2>{resInfo?.cuisines.join(", ")}</h2>
            <p>
              {resInfo?.sla?.deliveryTime} min ◾ {resInfo?.avgRating} ⭐
            </p>
          </div>
          <div className="menu-body">
            {resMenu.map((menu) => (
              <ResMenu key={menu.id} menu={menu} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ResMenuPage;
