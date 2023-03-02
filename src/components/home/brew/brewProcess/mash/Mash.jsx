import "./mash.css";
import NavBar from "../../../navBar/NavBar";
import NavbarIngredients from "../../ingredients/navbarIngredients/NavbarIngredients";
import BrewProcessCommonTitle from "../brewProcessCommonComponent/brewProcessCommonTitle/brewProcessCommonTitle";
import ValueObtaining from "../brewProcessCommonComponent/valueObtaining/ValueObtaining";
import ValueSuggested from "../brewProcessCommonComponent/valueSuggested/ValueSuggested";
import CommonList from "../brewProcessCommonComponent/brewProcessCommonList/CommonList";
import CommonBrewStep from "../brewProcessCommonComponent/brewProcessCommonSteps/CommonBrewStep";
import { GiWheat } from "react-icons/gi";

const Mash = () => {
  return (
    <div className="mash">
      <NavBar />
      <div className="mash-overflow-scroll">
        <div className="mash-top-section">
          <div className="mash-top-section-left">
            <BrewProcessCommonTitle select={"mash"} />
          </div>
          <div className="mash-top-section-right">
            <ValueObtaining />
            <ValueSuggested />
          </div>
        </div>
        <div className="mash-main-section">
          <div>
            <h1>Mash</h1>
            <CommonList icon={<GiWheat />} colorOrIbu={"Color (EBC)"} />
          </div>
          <div>
            <h1>Process</h1>
            <CommonBrewStep />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mash;
