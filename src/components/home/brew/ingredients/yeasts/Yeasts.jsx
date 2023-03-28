import "../../selectStyle/selectStyle.css";
import React from "react";

import "./yeasts.css";
import NavbarIngredients from "../navbarIngredients/NavbarIngredients";
import CommonEngredientsModal from "../commonEngredientsModal/CommonEngredientsModal";
import { FaBacterium } from "react-icons/fa";
import { addYeastRecipeAction } from "../../../../../redux/actions/ingredients.js";
import { subtractYeastRecipeAction } from "../../../../../redux/actions/ingredients.js";
import { useDispatch } from "react-redux";
import SideBarLeft from "../../sideBarLeft/SideBarLeft";
import { useStore } from "react-redux";
import NavBar from "../../../navBar/NavBar";
const Yeasts = () => {
  console.log(process.env.REACT_APP_BE_URL);
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
      <div className="malts-navbar-position-fixed">
        <NavBar />
      </div>
      <div className="selectStyle-sideBar-left">
        <SideBarLeft title={"Ingredients"} subtitle={"Yeasts"} />
      </div>
      {/*<NavbarIngredients prew="/hops" next="/others" />*/}
      <CommonEngredientsModal
        icon={<FaBacterium className="icon" />}
        title={"Yeasts and Bacteria"}
        colorOrIbu={"Cell/g"}
        next={"/others"}
        fetchProps={"yeasts"}
        addProduct={addRecipeAction}
        subtractProduct={subtractRecipeAction}
        addThisProduct={addThisProduct}
        previous={"/hops"}
        creator={"creator"}
      />
    </div>
  );
};

export default Yeasts;
