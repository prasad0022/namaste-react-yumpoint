import React from "react";
import ResCategory from "./ResCategory";
import { useParams } from "react-router";
import { useResMenu } from "../utils/useResMenu"; // Custom Hook to get restaurant menu.

const ResMenuPage = () => {
  const { resId } = useParams();

  const { resInfo, resCategories } = useResMenu(resId);

  return (
    <div className="res-menu-container" style={{ marginTop: "100px" }}>
      {resInfo === null && resCategories === null ? (
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
          <hr style={{ marginTop: "30px" }} />
          <div className="menu-category-container">
            {resCategories.map((category, idex) => (
              <ResCategory key={idex} data={category?.card?.card} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ResMenuPage;
