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
import { HiDotsHorizontal } from "react-icons/hi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import { useEffect } from "react";
const RecipesListFavourite = () => {
  const url = process.env.REACT_APP_BE_URL;
  const [refres, setRefresh] = useState("");
  const [dropDown, openDropDown] = useState(false);
  const [myRecipes, setMyRecipes] = useState([]);
  const [recipeSelected, setRecipeSelected] = useState("");
  const navigate = useNavigate();
  const userIdRec = localStorage.getItem("userId");
  const fetchRecipes = async (userId) => {
    const res = await fetch(`${url}/recipes/${userId}`);
    const data = await res.json();
    setMyRecipes(data);
  };
  useEffect(() => {
    fetchRecipes(userIdRec);
    console.log("Refresh");
  }, [dropDown, refres]);

  const deleteSingleRecipe = async (itemId) => {
    try {
      const response = await axios.delete(`${url}/recipes/${itemId}`);
      console.log(`Item with ID ${itemId} deleted successfully.`);
      setRecipeSelected("");
      fetchRecipes(userIdRec);
      navigate("/recipes");
    } catch (error) {
      console.error(`Error deleting item with ID ${itemId}: ${error.message}`);
    }
  };
  const addToFavourite = async (itemId, value) => {
    try {
      const response = await axios.put(`${url}/recipes/${itemId}`, {
        favourite: value,
      });
      console.log(`Item with ID ${itemId} updated successfully.`);
      setRefresh(itemId + value);
    } catch (error) {
      console.error(`Error updating item with ID ${itemId}: ${error.message}`);
    }
  };
  return (
    <div className="recipesList">
      <NavBar selectedSection={"Recipes"} />
      <div className="selectStyle-sideBar-left">
        <SideBarLeft title={"Recipes"} subtitle={"favourite"} />
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
              <h1>BeerBuzz</h1>
            </div>
            <div>
              <div className="shownEnt-recipe-dropdown-outside">
                <div
                  className="settingDropdown-close shownEnt-recipe-dropdown-outside"
                  onClick={() => {
                    dropDown === true
                      ? openDropDown(false)
                      : openDropDown(true);
                  }}
                >
                  <HiDotsHorizontal className="settingDropdown-close-icon" />{" "}
                </div>
                {dropDown && (
                  <div className="shownEnt-recipe-dropdown-inside">
                    <div className="relative-line-dropDown">
                      <div className="relative-line-dropDown-triangle"></div>
                      <div className="section-dropdown">Add to favourite</div>
                      <div className="section-dropdown">
                        {myRecipes &&
                        myRecipes.find((item) => item._id === recipeSelected)
                          .favourite &&
                        myRecipes.find((item) => item._id === recipeSelected)
                          .favourite === "yes" ? (
                          <AiFillHeart
                            className="showEnt-recipe-title-icon section-dropdown margin-left-1vh"
                            onClick={() => addToFavourite(recipeSelected, "no")}
                          />
                        ) : (
                          <AiOutlineHeart
                            className="showEnt-recipe-title-icon section-dropdown margin-left-1vh"
                            onClick={() =>
                              addToFavourite(recipeSelected, "yes")
                            }
                          />
                        )}
                      </div>
                    </div>
                    <div className="relative-line-dropDown">
                      <div className="section-dropdown">Delete recipe</div>
                      <BsTrashFill
                        className="showEnt-recipe-title-icon section-dropdown"
                        onClick={(e) => deleteSingleRecipe(recipeSelected)}
                      />
                    </div>
                    <div className="relative-line-dropDown">
                      <div className="section-dropdown">Add a Note</div>
                      <BsFillPencilFill
                        className="showEnt-recipe-title-icon section-dropdown"
                        onClick={() => openDropDown(false)}
                      />
                    </div>
                    <div className="relative-line-dropDown"></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        <div className="recipesList-list">
          {recipeSelected === "" ? (
            myRecipes.map((recipe, i) =>
              recipe.favourite && recipe.favourite === "yes" ? (
                <SingleRecipe
                  key={recipe._id}
                  body={recipe}
                  setRecipe={setRecipeSelected}
                />
              ) : (
                ""
              )
            )
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

export default RecipesListFavourite;
