import "../../brew/sideBarLeft/sideBarLeft.css";

import "./recipesList.css";
import SingleRecipe from "../singleRecipe/SingleRecipe";
import NavBar from "../../navBar/NavBar";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { CiBeerMugFull } from "react-icons/ci";
import { BsPencilFill } from "react-icons/bs";
import ShowEntireRecipe from "../showEntireRecipe/ShowEntireRecipe";
import BottomBar from "../../../bottomBar/BottomBar";
import { useNavigate } from "react-router-dom";
import SideBarLeft from "../../brew/sideBarLeft/SideBarLeft";

import { useEffect } from "react";
const RecipesList = () => {
  const [myRecipes, setMyRecipes] = useState([]);
  const [recipeSelected, setRecipeSelected] = useState("");
  const navigate = useNavigate();
  console.log(myRecipes);
  const userIdRec = localStorage.getItem("userId");
  const fetchRecipes = async (userId) => {
    const res = await fetch(`http://localhost:3001/recipes/${userId}`);
    const data = await res.json();
    setMyRecipes(data);
  };
  useEffect(() => {
    fetchRecipes(userIdRec);
  }, []);
  return (
    <div className="recipesList">
      <NavBar selectedSection={"Recipes"} />
      <div className="selectStyle-sideBar-left">
        <SideBarLeft title={"Recipes"} subtitle={"r"} />
      </div>
      <div className="common-selection-bigger-container">
        {recipeSelected === "" ? (
          <div className="recipesList-search">
            <BsSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search here the name of your beer"
            />
          </div>
        ) : (
          <div className="showEnt-recipe-title">
            <div>
              <h1>
                {recipeSelected.name !== "" ? recipeSelected.name : "Beer"}
              </h1>
            </div>
            <div>delete</div>
          </div>
        )}
        <div className="recipesList-list">
          {recipeSelected === "" ? (
            myRecipes.map((recipe, i) => (
              <SingleRecipe
                key={recipe._id}
                body={recipe}
                setRecipe={setRecipeSelected}
              />
            ))
          ) : (
            <>
              <ShowEntireRecipe
                setRecipe={setRecipeSelected}
                recipeId={recipeSelected}
              />
            </>
          )}
        </div>
        {recipeSelected === "" ? (
          <div className="bottomBar-list-proceed invisible-in-small-screen">
            <div
              className="bottomBar-list-proceed-button"
              onClick={() => navigate("/home")}
            >
              Back
            </div>
            <div
              className="bottomBar-list-proceed-button"
              onClick={() => navigate("/home")}
            >
              Save and Proceed
            </div>
          </div>
        ) : (
          <div className="bottomBar-list-proceed invisible-in-small-screen">
            <div
              className="bottomBar-list-proceed-button"
              onClick={() => setRecipeSelected("")}
            >
              Back
            </div>
            <div
              className="bottomBar-list-proceed-button"
              onClick={() => setRecipeSelected("")}
            >
              Save and Proceed
            </div>
          </div>
        )}
      </div>
      {recipeSelected === "" ? (
        <div className="bottomBar-list-proceed invisible-in-big-screen">
          <div
            className="bottomBar-list-proceed-button"
            onClick={() => navigate("/home")}
          >
            Back
          </div>
          <div
            className="bottomBar-list-proceed-button"
            onClick={() => navigate("/home")}
          >
            Save and Proceed
          </div>
        </div>
      ) : (
        <div className="bottomBar-list-proceed invisible-in-big-screen">
          <div
            className="bottomBar-list-proceed-button"
            onClick={() => setRecipeSelected("")}
          >
            Back
          </div>
          <div
            className="bottomBar-list-proceed-button"
            onClick={() => setRecipeSelected("")}
          >
            Save and Proceed
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipesList;
