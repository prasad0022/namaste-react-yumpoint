import React, { useEffect, useState } from "react";
import ResMenu from "./ResMenu";
import { useParams } from "react-router";

const ResMenuPage = () => {
  const [resInfo, setResInfo] = useState(null);
  const [resMenu, setResMenu] = useState(null);

  const { resId } = useParams();
  console.log(resId);

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

  return (
    <div className="res-menu-container" style={{ marginTop: "100px" }}>
      {resInfo === null && resMenu === null ? (
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
              <ResMenu key={menu.card.info.id} menu={menu.card.info} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ResMenuPage;
