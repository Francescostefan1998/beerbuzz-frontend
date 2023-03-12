import "./malts.css";
import NavbarIngredients from "../navbarIngredients/NavbarIngredients";
import { GiWheat } from "react-icons/gi";
import { HiSearch } from "react-icons/hi";
import { useState } from "react";
import NavBar from "../../../navBar/NavBar";
import CommonEngredientsModal from "../commonEngredientsModal/CommonEngredientsModal";
import { addMaltRecipeAction } from "../../../../../redux/actions/ingredients.js";
import { subtractMaltRecipeAction } from "../../../../../redux/actions/ingredients.js";
import { useDispatch } from "react-redux";
import { useStore } from "react-redux";
import BottomBar from "../../../../bottomBar/BottomBar";
const Malts = () => {
  const dispatch = useDispatch();
  const addRecipeAction = async (malt) => {
    dispatch(addMaltRecipeAction(malt));
  };
  const subtractRecipeAction = async (malt) => {
    dispatch(subtractMaltRecipeAction(malt));
  };
  const addThisProduct = async (product) => {};
  return (
    <div className="malts">
      <NavBar />
      <CommonEngredientsModal
        icon={<GiWheat className="icon" />}
        title={"Fermentable"}
        colorOrIbu={"Col.(EBC)"}
        next={"/hops"}
        fetchProps={"malts"}
        addProduct={addRecipeAction}
        subtractProduct={subtractRecipeAction}
        addThisProduct={addThisProduct}
        previous={"/water"}
      />
    </div>
  );
};

export default Malts;
