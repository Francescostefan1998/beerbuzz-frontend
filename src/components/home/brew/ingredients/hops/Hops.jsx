import "../../selectStyle/selectStyle.css";

import "./hops.css";
import NavbarIngredients from "../navbarIngredients/NavbarIngredients";
import CommonEngredientsModal from "../commonEngredientsModal/CommonEngredientsModal";
import { GiHops } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { useStore } from "react-redux";
import SideBarLeft from "../../sideBarLeft/SideBarLeft";
import { addHopRecipeAction } from "../../../../../redux/actions/ingredients.js";
import { subtractHopRecipeAction } from "../../../../../redux/actions/ingredients.js";
import NavBar from "../../../navBar/NavBar";
const Hops = () => {
  const dispatch = useDispatch();
  const addRecipeAction = async (hop) => {
    dispatch(addHopRecipeAction(hop));
  };
  const subtractRecipeAction = async (hop) => {
    dispatch(subtractHopRecipeAction(hop));
  };
  const addThisProduct = async (product) => {};

  return (
    <div className="hops">
      <div className="malts-navbar-position-fixed">
        <NavBar />
      </div>
      <div className="selectStyle-sideBar-left">
        <SideBarLeft title={"Ingredients"} subtitle={"Hops"} />
      </div>
      {/*<NavbarIngredients prew="/malts" next="/yeasts" />*/}
      <CommonEngredientsModal
        icon={<GiHops className="icon" />}
        title={"Hops"}
        colorOrIbu={"Acid"}
        next={"/yeasts"}
        fetchProps={"hops"}
        addProduct={addRecipeAction}
        subtractProduct={subtractRecipeAction}
        addThisProduct={addThisProduct}
        previous={"/malts"}
        creator={"creator"}
      />
    </div>
  );
};

export default Hops;
