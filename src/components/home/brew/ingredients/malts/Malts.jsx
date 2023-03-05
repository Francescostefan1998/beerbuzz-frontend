import "./malts.css";
import NavbarIngredients from "../navbarIngredients/NavbarIngredients";
import { GiWheat } from "react-icons/gi";
import { HiSearch } from "react-icons/hi";
import { useState } from "react";
import CommonEngredientsModal from "../commonEngredientsModal/CommonEngredientsModal";
import { addMaltRecipeAction } from "../../../../../redux/actions";
import { subtractMaltRecipeAction } from "../../../../../redux/actions";
import { useDispatch } from "react-redux";
import { useStore } from "react-redux";
const Malts = () => {
  const dispatch = useDispatch();
  const addRecipeAction = async (malt) => {
    dispatch(addMaltRecipeAction(malt));
  };
  const subtractRecipeAction = async (malt) => {
    dispatch(subtractMaltRecipeAction(malt));
  };

  return (
    <div className="malts">
      <NavbarIngredients prew="/water" next="/hops" />
      <CommonEngredientsModal
        icon={<GiWheat className="icon" />}
        title={"Fermentable"}
        colorOrIbu={"Col.(EBC)"}
        next={"/hops"}
        fetchProps={"malts"}
        addProduct={addRecipeAction}
        subtractProduct={subtractRecipeAction}
      />
    </div>
  );
};

export default Malts;
