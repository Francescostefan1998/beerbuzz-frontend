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
import { addFermentationStepRecipeAction } from "../../../../../redux/actions/steps";
import { subtractFermentationSteptRecipeAction } from "../../../../../redux/actions/steps";
import { addFermentationRecipeAction } from "../../../../../redux/actions/recipe";
import { addYeastsRecipeAction } from "../../../../../redux/actions/recipe";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import MashWater from "../mashWater/MashWater";
const Fermentation = () => {
  const { fermentation } = useSelector((state) => state.recipeSteps);
  const yeastsList = useSelector((state) => state.createRecipe.yeasts[0]);

  const [refresh, setRefresh] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const addRecipeAction = (yeast) => {
    dispatch(addYeastRecipeAction(yeast));
    setRefresh(yeast._id);
  };
  const subtractRecipeAction = (yeast) => {
    dispatch(subtractYeastRecipeAction(yeast));
    const newYeasts = yeastsList.filter((yeasts) => yeasts._id !== yeast._id);

    dispatch(addYeastsRecipeAction(newYeasts));
    setRefresh(yeast._id);
  };
  const addStepRecipeAction = (step) => {
    dispatch(addFermentationStepRecipeAction(step));
    setRefresh(step.name);
  };
  const subtractStepRecipeAction = (step) => {
    dispatch(subtractFermentationSteptRecipeAction(step));
    setRefresh(step.name + "sub");
  };
  const saveSelected = (title) => {
    setRefresh(title);
    switch (title) {
      case "Fermentation":
        dispatch(addFermentationRecipeAction(fermentation));
        break;

        break;
      default:
    }
  };
  const addThisProduct = (product) => {};
  useEffect(() => {
    console.log(refresh);
  }, [refresh]);
  return (
    <>
      <div className="navbar-visible-in-small-screen">
        <NavBar />
      </div>
      <div className="fermentation">
        <div className="navbar-visible-in-big-screen">
          <NavBar />
        </div>

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
          <MashWater setRefresh={setRefresh} />

          <div className="fermentation-main-section">
            <div className="fermentation-main-section-yeasts">
              <h1>Yeasts And Bacteria</h1>
              <CommonList
                icon={<FaBacterium />}
                colorOrIbu={"Attenuation (%)"}
                title={"Yeasts and Bacteria"}
                addProduct={addRecipeAction}
                subtractProduct={subtractRecipeAction}
                refresh={refresh}
                colorOff={"colorOff"}
                addThisProduct={addThisProduct}
              />
            </div>
            <div className="fermentation-main-section-process">
              <h1>Fermentation</h1>
              <CommonBrewStep
                addStepRecipeAction={addStepRecipeAction}
                subtractStepRecipeAction={subtractStepRecipeAction}
                title={"Fermentation"}
                refresh={refresh}
              />
            </div>
          </div>
          <FermentationChart />
        </div>
        <div className="fermentation-bottom-section visible-in-big-screen">
          <div
            className="fermentation-bottom-section-button"
            onClick={() => navigate("/boil")}
          >
            Back
          </div>
          <div
            className="fermentation-bottom-section-button"
            onClick={() => {
              saveSelected("Fermentation");
              navigate("/check");
            }}
          >
            Save and Go to Check Page
          </div>
        </div>
      </div>
      <div className="fermentation-bottom-section visible-in-small-screen">
        <div
          className="fermentation-bottom-section-button"
          onClick={() => navigate("/boil")}
        >
          Back
        </div>
        <div
          className="fermentation-bottom-section-button"
          onClick={() => {
            saveSelected("Fermentation");
            navigate("/check");
          }}
        >
          Save and Go to Check Page
        </div>
      </div>
    </>
  );
};

export default Fermentation;
