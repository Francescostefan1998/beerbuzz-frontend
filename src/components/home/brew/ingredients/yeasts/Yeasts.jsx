import "./yeasts.css";
import NavbarIngredients from "../navbarIngredients/NavbarIngredients";
import CommonEngredientsModal from "../commonEngredientsModal/CommonEngredientsModal";
import { FaBacterium } from "react-icons/fa";
import { addYeastRecipeAction } from "../../../../../redux/actions/ingredients.js";
import { subtractYeastRecipeAction } from "../../../../../redux/actions/ingredients.js";
import { useDispatch } from "react-redux";
import { useStore } from "react-redux";
const Yeasts = () => {
  const dispatch = useDispatch();
  const addRecipeAction = async (yeast) => {
    dispatch(addYeastRecipeAction(yeast));
  };
  const subtractRecipeAction = async (yeast) => {
    dispatch(subtractYeastRecipeAction(yeast));
  };
  const addThisProduct = async (product) => {};

  return (
    <div className="yeasts">
      <NavbarIngredients prew="/hops" next="/others" />
      <CommonEngredientsModal
        icon={<FaBacterium className="icon" />}
        title={"Yeasts and Bacterias"}
        colorOrIbu={"Cells/g"}
        next={"/others"}
        fetchProps={"yeasts"}
        addProduct={addRecipeAction}
        subtractProduct={subtractRecipeAction}
        addThisProduct={addThisProduct}
      />
    </div>
  );
};

export default Yeasts;
