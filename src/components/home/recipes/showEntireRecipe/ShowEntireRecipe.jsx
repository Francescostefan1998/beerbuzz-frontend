import "./showEntireRecipe.css";
import { useEffect } from "react";
import { useState } from "react";
import ShowRecipeData from "./showRecipeData/ShowRecipeData";
import ShowRecipeMaterial from "./showRecipeMaterial/ShowRecipeMaterial";
import ShowRecipeSteps from "./showRecipeSteps/ShowRecipeSteps";
import ShowRecipeTitle from "./showRecipeTitle/ShowRecipeTitle";
const ShowEntireRecipe = ({ setRecipe, recipeId }) => {
  const [body, setBody] = useState(null);
  const userIdRec = localStorage.getItem("userId");
  const fetchSingleRecipe = async (userId) => {
    const res = await fetch(
      `http://localhost:3001/recipes/${userId}/${recipeId}`
    );
    const data = await res.json();
    setBody(data);
  };
  useEffect(() => {
    fetchSingleRecipe(userIdRec);
  }, [recipeId]);
  return (
    <div onClick={(e) => setRecipe("")}>
      <div className="showEntireRecipe-top">
        {" "}
        <div className="showEntireRecipe-top-left">
          {" "}
          <ShowRecipeTitle body={body} />
        </div>
        <div className="showEntireRecipe-top-right">
          <ShowRecipeData body={body} />
        </div>
      </div>
      <ShowRecipeMaterial body={body} />
      <ShowRecipeSteps body={body} />
    </div>
  );
};

export default ShowEntireRecipe;
