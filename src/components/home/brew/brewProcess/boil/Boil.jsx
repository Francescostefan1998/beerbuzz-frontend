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
import { GiHops } from "react-icons/gi";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addHopRecipeAction } from "../../../../../redux/actions/ingredients";
import { subtractHopRecipeAction } from "../../../../../redux/actions/ingredients";
import { addBoilStepRecipeAction } from "../../../../../redux/actions/steps";
import { subtractBoilStepRecipeAction } from "../../../../../redux/actions/steps";
const Boil = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [refresh, setRefresh] = useState("");
  const addRecipeAction = async (hop) => {
    await dispatch(addHopRecipeAction(hop));
    setRefresh(hop._id);
  };
  const subtractRecipeAction = async (hop) => {
    await dispatch(subtractHopRecipeAction(hop));
    setRefresh(hop._id);
  };
  const addStepRecipeAction = async (step) => {
    await dispatch(addBoilStepRecipeAction(step));
    setRefresh(step.name);
  };
  const subtractStepRecipeAction = async (step) => {
    await dispatch(subtractBoilStepRecipeAction(step));
    setRefresh(step.name);
  };
  const addThisProduct = async (product) => {};

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
            <CommonList
              icon={<GiHops />}
              colorOrIbu={"Alpha Acid (%)"}
              title={"Hops"}
              addProduct={addRecipeAction}
              subtractProduct={subtractRecipeAction}
              refresh={refresh}
              colorOff={"colorOff"}
              addThisProduct={addThisProduct}
            />
          </div>
          <div className="boil-main-section-process">
            <h1>Boil Process</h1>
            <CommonBrewStep
              addStepRecipeAction={addStepRecipeAction}
              subtractStepRecipeAction={subtractStepRecipeAction}
            />
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
            Save and Go to Fermentation Page
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boil;
