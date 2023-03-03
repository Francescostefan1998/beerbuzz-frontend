import "./fermentation.css";
import NavBar from "../../../navBar/NavBar";
import NavbarIngredients from "../../ingredients/navbarIngredients/NavbarIngredients";
import BrewProcessCommonTitle from "../brewProcessCommonComponent/brewProcessCommonTitle/brewProcessCommonTitle";
import ValueObtaining from "../brewProcessCommonComponent/valueObtaining/ValueObtaining";
import ValueSuggested from "../brewProcessCommonComponent/valueSuggested/ValueSuggested";
import CommonList from "../brewProcessCommonComponent/brewProcessCommonList/CommonList";
import CommonBrewStep from "../brewProcessCommonComponent/brewProcessCommonSteps/CommonBrewStep";
import { GiWheat } from "react-icons/gi";
import { FaBacterium } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

const Fermentation = () => {
  const navigate = useNavigate();
  return (
    <div className="fermentation">
      <NavBar />
      <div className="fermentation-overflow-scroll">
        <div className="fermentation-top-section">
          <div className="fermentation-top-section-left">
            <BrewProcessCommonTitle select={"fermentation"} />
          </div>
          <div className="fermentation-top-section-right">
            <div className="fermentation-top-section-right-container1">
              {" "}
              <ValueObtaining />
            </div>
            <div className="fermentation-top-section-right-container">
              <ValueSuggested />
            </div>
          </div>
        </div>
        <div className="fermentation-main-section">
          <div>
            <h1>Fermentation</h1>
            <CommonList
              icon={<FaBacterium />}
              colorOrIbu={"Attenuation (%)"}
              title={"Yeasts and Bacteria"}
            />
          </div>
          <div className="fermentation-main-section-process">
            <h1>Fermentation Process</h1>
            <CommonBrewStep />
          </div>
        </div>
        <div className="fermentation-bottom-section">
          <div
            className="fermentation-bottom-section-button"
            onClick={() => navigate("/boil")}
          >
            Back
          </div>
          <div
            className="fermentation-bottom-section-button"
            onClick={() => navigate("/home")}
          >
            Save and Go to Check Page
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fermentation;
