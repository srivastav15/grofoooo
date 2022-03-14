import React from "react";

const TrendingFood = ({ url }) => {
  return (
    <>
      <div className="food-item-wrap">
        <a href="search_list_new_foods.html">
          <div
            className="figure-wrap bg-image"
            style={{
              background: `url(${url.url}) center center/cover no-repeat`,
              "background-size": "200px",
            }}
          ></div>
        </a>
      </div>
    </>
  );
};

export default TrendingFood;
