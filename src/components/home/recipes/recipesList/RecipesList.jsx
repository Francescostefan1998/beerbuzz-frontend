import "../../brew/sideBarLeft/sideBarLeft.css";

import "./recipesList.css";
import axios from "axios";
import SingleRecipe from "../singleRecipe/SingleRecipe";
import NavBar from "../../navBar/NavBar";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { BsTrashFill } from "react-icons/bs";
import { CiBeerMugFull } from "react-icons/ci";
import { BsPencilFill } from "react-icons/bs";
import ShowEntireRecipe from "../showEntireRecipe/ShowEntireRecipe";
import BottomBar from "../../../bottomBar/BottomBar";
import { useNavigate } from "react-router-dom";
import SideBarLeft from "../../brew/sideBarLeft/SideBarLeft";

import { useEffect } from "react";
const RecipesList = () => {
  const url = process.env.REACT_APP_BE_URL;

  const [myRecipes, setMyRecipes] = useState([]);
  const [recipeSelected, setRecipeSelected] = useState("");
  const navigate = useNavigate();
  console.log(myRecipes);
  const userIdRec = localStorage.getItem("userId");
  const fetchRecipes = async (userId) => {
    const res = await fetch(`${url}/recipes/${userId}`);
    const data = await res.json();
    setMyRecipes(data);
  };
  useEffect(() => {
    fetchRecipes(userIdRec);
  }, []);
  const deleteSingleRecipe = async (itemId) => {
    try {
      const response = await axios.delete(`${url}/recipes/${itemId}`);
      console.log(`Item with ID ${itemId} deleted successfully.`);
      setRecipeSelected("");
      fetchRecipes(userIdRec);
    } catch (error) {
      console.error(`Error deleting item with ID ${itemId}: ${error.message}`);
    }
  };
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
              <h1>Beer</h1>
            </div>
            <div>
              <BsTrashFill
                className="showEnt-recipe-title-icon"
                onClick={(e) => deleteSingleRecipe(recipeSelected)}
              />
            </div>
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
