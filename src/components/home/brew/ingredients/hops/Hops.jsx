import "./hops.css";
import NavbarIngredients from "../navbarIngredients/NavbarIngredients";
import CommonEngredientsModal from "../commonEngredientsModal/CommonEngredientsModal";
import { GiHops } from "react-icons/gi";
const Hops = () => {
  return (
    <div className="hops">
      <NavbarIngredients prew="/malts" next="/yeasts" />
      <CommonEngredientsModal
        icon={<GiHops />}
        title={"Hops"}
        colorOrIbu={"Alpha Acid (%)"}
      />
    </div>
  );
};

export default Hops;
