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
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FermentationChart from "./fermentationChart/FermentationChart";
import { useDispatch } from "react-redux";
import { addYeastRecipeAction } from "../../../../../redux/actions/ingredients";
import { subtractYeastRecipeAction } from "../../../../../redux/actions/ingredients";
const Fermentation = () => {
  const [refresh, setRefresh] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const addRecipeAction = async (yeast) => {
    await dispatch(addYeastRecipeAction(yeast));
    setRefresh(yeast._id);
  };
  const subtractRecipeAction = async (yeast) => {
    await dispatch(subtractYeastRecipeAction(yeast));
    setRefresh(yeast._id);
  };
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
              addProduct={addRecipeAction}
              subtractProduct={subtractRecipeAction}
              refresh={refresh}
            />
          </div>
          <div className="fermentation-main-section-process">
            <h1>Fermentation Process</h1>
            <CommonBrewStep />
          </div>
        </div>
        <FermentationChart />
        <div className="fermentation-bottom-section">
          <div
            className="fermentation-bottom-section-button"
            onClick={() => navigate("/boil")}
          >
            Back
          </div>
          <div
            className="fermentation-bottom-section-button"
            onClick={() => navigate("/check")}
          >
            Save and Go to Check Page
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fermentation;
