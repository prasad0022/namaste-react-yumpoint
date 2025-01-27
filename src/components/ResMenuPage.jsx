import React, { useEffect, useState } from "react";
import ResMenu from "./ResMenu";
import { useParams } from "react-router";
import { useResMenu } from "../utils/useResMenu"; // Custom Hook to get restaurant menu.

const ResMenuPage = () => {
  const { resId } = useParams();

  const { resInfo, resMenu } = useResMenu(resId);

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
