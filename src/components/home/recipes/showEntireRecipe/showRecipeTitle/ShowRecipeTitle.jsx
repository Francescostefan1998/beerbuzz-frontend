import React from "react";

import "./showRecipeTitle.css";

const ShowRecipeTitle = ({ body }) => {
  return (
    <>
      {body && (
        <div className="showRecipeTitle">
          <div>
            <h2>{body.name !== "" ? body.name : "Beer"}</h2>
          </div>
          <div className="showRecipeTitle-image">
            <img
              src={
                body.image !== ""
                  ? body.image
                  : "https://th.bing.com/th/id/OIP.CaxyTtW5_xdxtnmTND4GeQHaHa?pid=ImgDet&rs=1"
              }
              alt="recipeImage"
            />
          </div>

          <div>
            <h3>{body.author !== "" ? body.author : "Me"}</h3>
          </div>
        </div>
      )}
    </>
  );
};

export default ShowRecipeTitle;
