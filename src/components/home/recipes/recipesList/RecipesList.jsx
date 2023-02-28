import "./recipesList.css";
import SingleRecipe from "../singleRecipe/SingleRecipe";
import NavBar from "../../navBar/NavBar";
import { BsSearch } from "react-icons/bs";

const RecipesList = () => {
  return (
    <div className="recipesList">
      <NavBar />
      <div className="recipesList-search">
        <BsSearch className="search-icon" />
        <input type="text" placeholder="Search here the name of your beer" />
      </div>
      <div>
        <div></div>
      </div>
    </div>
  );
};

export default RecipesList;
