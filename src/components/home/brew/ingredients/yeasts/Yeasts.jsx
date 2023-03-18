import "../../selectStyle/selectStyle.css";

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
      <NavBar />
      <div className="selectStyle-sideBar-left">
        <SideBarLeft title={"Select Style"} />
      </div>
      {/*<NavbarIngredients prew="/hops" next="/others" />*/}
      <CommonEngredientsModal
        icon={<FaBacterium className="icon" />}
        title={"Yeasts and Bacterias"}
        colorOrIbu={"Cells/g"}
        next={"/others"}
        fetchProps={"yeasts"}
        addProduct={addRecipeAction}
        subtractProduct={subtractRecipeAction}
        addThisProduct={addThisProduct}
        previous={"/hops"}
      />
    </div>
  );
};

export default Yeasts;
