import "./mash.css";
import NavBar from "../../../navBar/NavBar";
import NavbarIngredients from "../../ingredients/navbarIngredients/NavbarIngredients";
import BrewProcessCommonTitle from "../brewProcessCommonComponent/brewProcessCommonTitle/brewProcessCommonTitle";
import ValueObtaining from "../brewProcessCommonComponent/valueObtaining/ValueObtaining";
import ValueSuggested from "../brewProcessCommonComponent/valueSuggested/ValueSuggested";
import CommonList from "../brewProcessCommonComponent/brewProcessCommonList/CommonList";
import CommonBrewStep from "../brewProcessCommonComponent/brewProcessCommonSteps/CommonBrewStep";
import { GiWheat } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const Mash = () => {
  const navigate = useNavigate();
  return (
    <div className="mash">
      <NavBar />
      <div className="mash-overflow-scroll">
        <div className="mash-top-section">
          <div className="mash-top-section-left">
            <BrewProcessCommonTitle select={"mash"} />
          </div>
          <div className="mash-top-section-right">
            <div className="mash-top-section-right-container1">
              {" "}
              <ValueObtaining />
            </div>
            <div className="mash-top-section-right-container">
              <ValueSuggested />
            </div>
          </div>
        </div>
        <div className="mash-main-section">
          <div>
            <h1>Mash</h1>
            <CommonList
              icon={<GiWheat />}
              colorOrIbu={"Color (EBC)"}
              title={"Mash"}
            />
          </div>
          <div className="mash-main-section-process">
            <h1>Mash Process</h1>
            <CommonBrewStep />
          </div>
        </div>
        <div className="mash-bottom-section">
          <div
            className="mash-bottom-section-button"
            onClick={() => navigate("/others")}
          >
            Back
          </div>
          <div
            className="mash-bottom-section-button"
            onClick={() => navigate("/boil")}
          >
            Save and Go to Boil Page
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mash;
