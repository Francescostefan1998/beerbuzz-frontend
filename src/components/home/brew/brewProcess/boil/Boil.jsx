import "./boil.css";
import NavBar from "../../../navBar/NavBar";
import NavbarIngredients from "../../ingredients/navbarIngredients/NavbarIngredients";
import BrewProcessCommonTitle from "../brewProcessCommonComponent/brewProcessCommonTitle/brewProcessCommonTitle";
import ValueObtaining from "../brewProcessCommonComponent/valueObtaining/ValueObtaining";
import ValueSuggested from "../brewProcessCommonComponent/valueSuggested/ValueSuggested";
import CommonList from "../brewProcessCommonComponent/brewProcessCommonList/CommonList";
import CommonBrewStep from "../brewProcessCommonComponent/brewProcessCommonSteps/CommonBrewStep";
import { GiWheat } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const Boil = () => {
  const navigate = useNavigate();
  return (
    <div className="boil">
      <NavBar />
      <div className="boil-overflow-scroll">
        <div className="boil-top-section">
          <div className="boil-top-section-left">
            <BrewProcessCommonTitle select={"boil"} />
          </div>
          <div className="boil-top-section-right">
            <div className="boil-top-section-right-container1">
              {" "}
              <ValueObtaining />
            </div>
            <div className="boil-top-section-right-container">
              <ValueSuggested />
            </div>
          </div>
        </div>
        <div className="boil-main-section">
          <div>
            <h1>Boil</h1>
            <CommonList icon={<GiWheat />} colorOrIbu={"Color (EBC)"} />
          </div>
          <div className="boil-main-section-process">
            <h1>Boil Process</h1>
            <CommonBrewStep />
          </div>
        </div>
        <div className="boil-bottom-section">
          <div
            className="boil-bottom-section-button"
            onClick={() => navigate("/mash")}
          >
            Back
          </div>
          <div
            className="boil-bottom-section-button"
            onClick={() => navigate("/fermentation")}
          >
            Save and Go to Boil Page
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boil;
