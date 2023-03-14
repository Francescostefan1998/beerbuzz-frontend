import "./recipesList.css";
import SingleRecipe from "../singleRecipe/SingleRecipe";
import NavBar from "../../navBar/NavBar";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { CiBeerMugFull } from "react-icons/ci";
import { BsPencilFill } from "react-icons/bs";
import ShowEntireRecipe from "../showEntireRecipe/ShowEntireRecipe";
import BottomBar from "../../../bottomBar/BottomBar";
import { useEffect } from "react";
const RecipesList = () => {
  const [myRecipes, setMyRecipes] = useState([]);
  const [recipeSelected, setRecipeSelected] = useState("");
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
      <div className="common-selection-bigger-container">
        <div className="recipesList-search">
          <BsSearch className="search-icon" />
          <input type="text" placeholder="Search here the name of your beer" />
        </div>
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
            <ShowEntireRecipe
              setRecipe={setRecipeSelected}
              recipeId={recipeSelected}
            />
          )}
        </div>
        <BottomBar
          prew={"/home"}
          next={"/home"}
          proceedWater={""}
          backWater={""}
        />
      </div>
    </div>
  );
};

export default RecipesList;
