import "./checkResults.css";
import "../fermentation/fermentationChart/fermentationChart.css";
import "../fermentation/fermentation.css";
import "../boil/boil.css";
import NavBar from "../../../navBar/NavBar";
import NavbarIngredients from "../../ingredients/navbarIngredients/NavbarIngredients";
import BrewProcessCommonTitle from "../brewProcessCommonComponent/brewProcessCommonTitle/brewProcessCommonTitle";
import ValueObtaining from "../brewProcessCommonComponent/valueObtaining/ValueObtaining";
import ValueSuggested from "../brewProcessCommonComponent/valueSuggested/ValueSuggested";
import CommonList from "../brewProcessCommonComponent/brewProcessCommonList/CommonList";
import CommonBrewStep from "../brewProcessCommonComponent/brewProcessCommonSteps/CommonBrewStep";
import { GiWheat } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import FermentationChart from "../fermentation/fermentationChart/FermentationChart";

import { FaBacterium } from "react-icons/fa";
import { GiHops } from "react-icons/gi";
const CheckResults = () => {
  const navigate = useNavigate();
  return (
    <div className="checkResults">
      <NavBar />
      <div className="checkResults-overflow-scroll">
        <div className="checkResults-top-section">
          <div className="checkResults-top-section-left">
            <BrewProcessCommonTitle select={"checkResults"} />
          </div>
          <div className="checkResults-top-section-right">
            <div className="checkResults-top-section-right-container1">
              {" "}
              <ValueObtaining />
            </div>
            <div className="checkResults-top-section-right-container">
              <ValueSuggested />
            </div>
          </div>
        </div>
        <div className="checkResults-main-section">
          <div>
            <h1>Mash</h1>
            <CommonList
              icon={<GiWheat />}
              colorOrIbu={"Color (EBC)"}
              title={"Mash"}
            />
          </div>
          <div className="checkResults-main-section-process">
            <h1>Mash Process</h1>
            <CommonBrewStep />
          </div>
        </div>
        <div className="boil-main-section">
          <div>
            <h1>Boil</h1>
            <CommonList
              icon={<GiHops />}
              colorOrIbu={"Alpha Acid (%)"}
              title={"Hops"}
            />
          </div>
          <div className="boil-main-section-process">
            <h1>Boil Process</h1>
            <CommonBrewStep />
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
        <FermentationChart />
        <div className="checkResults-bottom-section">
          <div
            className="checkResults-bottom-section-button"
            onClick={() => navigate("/fermentation")}
          >
            Back
          </div>
          <div
            className="checkResults-bottom-section-button"
            onClick={() => navigate("/home")}
          >
            Save Recipe!!
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckResults;
