import "./recipesList.css";
import SingleRecipe from "../singleRecipe/SingleRecipe";
import NavBar from "../../navBar/NavBar";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { CiBeerMugFull } from "react-icons/ci";
import { BsPencilFill } from "react-icons/bs";
const RecipesList = () => {
  const [image, setImage] = useState("");
  return (
    <div className="recipesList">
      <NavBar />
      <div className="recipesList-search">
        <BsSearch className="search-icon" />
        <input type="text" placeholder="Search here the name of your beer" />
      </div>
      <div className="recipesList-list">
        <div className="recipesList-recipe">
          <div className="recipesList-recipe-image">
            {image !== "" ? (
              <img src={image} alt="mybeer" />
            ) : (
              <CiBeerMugFull className="recipesList-recipe-image-icon" />
            )}
          </div>
          <div className="recipesList-recipe-data">
            <div className="title">
              <span>
                <strong>Name of the beer </strong>
              </span>{" "}
              <span className="author">BeerBuzz</span>
            </div>
            <div className="style">Indian Pale Ale</div>
            <div className="details">
              <div>
                <strong>ABV:</strong> 5.00%,
              </div>
              <div>
                <strong>IBU:</strong> 50,
              </div>
              <div>
                <strong>OG:</strong> 1055,
              </div>
              <div>
                <strong>FG:</strong> 1005,
              </div>
            </div>
          </div>
          <div className="recipesList-recipe-date mb-4">
            <div className="recipesList-recipe-date-date">date</div>
            <div className="recipesList-recipe-date-edit">
              <BsPencilFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipesList;
