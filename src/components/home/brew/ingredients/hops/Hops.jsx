import "./hops.css";
import NavbarIngredients from "../navbarIngredients/NavbarIngredients";
import CommonEngredientsModal from "../commonEngredientsModal/CommonEngredientsModal";
import { GiHops } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { useStore } from "react-redux";
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
      <NavBar />
      {/*<NavbarIngredients prew="/malts" next="/yeasts" />*/}
      <CommonEngredientsModal
        icon={<GiHops className="icon" />}
        title={"Hops"}
        colorOrIbu={"Alpha Acid (%)"}
        next={"/yeasts"}
        fetchProps={"hops"}
        addProduct={addRecipeAction}
        subtractProduct={subtractRecipeAction}
        addThisProduct={addThisProduct}
        previous={"/malts"}
      />
    </div>
  );
};

export default Hops;
