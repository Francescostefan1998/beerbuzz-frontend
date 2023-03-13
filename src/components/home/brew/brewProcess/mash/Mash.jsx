import "./mash.css";
import NavBar from "../../../navBar/NavBar";
import NavbarIngredients from "../../ingredients/navbarIngredients/NavbarIngredients";
import BrewProcessCommonTitle from "../brewProcessCommonComponent/brewProcessCommonTitle/brewProcessCommonTitle";
import ValueObtaining from "../brewProcessCommonComponent/valueObtaining/ValueObtaining";
import ValueSuggested from "../brewProcessCommonComponent/valueSuggested/ValueSuggested";
import CommonList from "../brewProcessCommonComponent/brewProcessCommonList/CommonList";
import CommonBrewStep from "../brewProcessCommonComponent/brewProcessCommonSteps/CommonBrewStep";
import { GiWheat } from "react-icons/gi";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addEbcbRecipeAction } from "../../../../../redux/actions/recipe";
import { addMaltRecipeAction } from "../../../../../redux/actions/ingredients";
import { subtractMaltRecipeAction } from "../../../../../redux/actions/ingredients";
import { addMashStepRecipeAction } from "../../../../../redux/actions/steps";
import { subtractMashStepRecipeAction } from "../../../../../redux/actions/steps";
import {
  addMaltsRecipeAction,
  addMashRecipeAction,
} from "../../../../../redux/actions/recipe";
import { useSelector } from "react-redux";
import MashWater from "../mashWater/MashWater";
const Mash = () => {
  const { mash } = useSelector((state) => state.recipeSteps);
  const { malts } = useSelector((state) => state.recipeIngredient);
  const maltsList = useSelector((state) => state.createRecipe.malts[0]);
  const { postBoil } = useSelector((state) => state.waterAndBeerData);
  const [refresh, setRefresh] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const saveSelected = async (title) => {
    await setRefresh(title);
    switch (title) {
      case "Mash":
        dispatch(addMashRecipeAction(mash));
        break;

        break;
      default:
    }
  };
  const calculateAverageEbcAndYeld = () => {
    let sumOfEbc = 0;

    for (let i = 0; i < maltsList.length; i++) {
      sumOfEbc += maltsList[i].color * parseFloat(maltsList[i].quantity);
    }
    let ebcBeer = sumOfEbc / postBoil;
    setRefresh("sumOfEbc");
    dispatch(addEbcbRecipeAction(ebcBeer));
  };
  const addRecipeAction = async (malt) => {
    await dispatch(addMaltRecipeAction(malt));
    setRefresh(malt._id);
  };
  const subtractRecipeAction = async (malt) => {
    await dispatch(subtractMaltRecipeAction(malt));
    await setRefresh(malt._id);
    await dispatch(addMaltsRecipeAction(malts));
    setRefresh(malt._id);
  };
  const addStepRecipeAction = async (step) => {
    await dispatch(addMashStepRecipeAction(step));
    setRefresh(step.name);
  };
  const subtractStepRecipeAction = async (step) => {
    await dispatch(subtractMashStepRecipeAction(step));
    setRefresh(step.name + "sub");
  };
  const addThisProduct = async (product) => {
    setRefresh(product);
  };

  useEffect(() => {
    calculateAverageEbcAndYeld();
  }, [refresh]);

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
              <ValueObtaining refresh={refresh} />
            </div>
            <div className="mash-top-section-right-container">
              <ValueSuggested />
            </div>
          </div>
        </div>
        <MashWater setRefresh={setRefresh} />

        <div className="mash-main-section">
          <div className="mash-main-section-malts">
            <h1>Malts</h1>
            <CommonList
              icon={<GiWheat />}
              colorOrIbu={"Color (EBC)"}
              title={"Mash"}
              addProduct={addRecipeAction}
              subtractProduct={subtractRecipeAction}
              refresh={refresh}
              colorOff={"colorOff"}
              addThisProduct={addThisProduct}
            />
          </div>
          <div className="mash-main-section-process">
            <h1>Mash</h1>
            <CommonBrewStep
              addStepRecipeAction={addStepRecipeAction}
              subtractStepRecipeAction={subtractStepRecipeAction}
              refresh={refresh}
              title={"Mash"}
            />
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
            onClick={() => {
              saveSelected("Mash");
              navigate("/boil");
            }}
          >
            Save and Go to Boil Page
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mash;
