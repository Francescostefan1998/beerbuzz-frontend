import "./yeasts.css";
import NavbarIngredients from "../navbarIngredients/NavbarIngredients";
import CommonEngredientsModal from "../commonEngredientsModal/CommonEngredientsModal";
import { FaBacterium } from "react-icons/fa";
const Yeasts = () => {
  return (
    <div className="yeasts">
      <NavbarIngredients prew="/hops" next="/others" />
      <CommonEngredientsModal
        icon={<FaBacterium className="icon" />}
        title={"Yeasts and Bacterias"}
        colorOrIbu={"Attenuation (%)"}
        next={"/others"}
      />
    </div>
  );
};

export default Yeasts;
