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
import {
  addBoilRecipeAction,
  addHopsRecipeAction,
  addIbuRecipeAction,
} from "../../../../../redux/actions/recipe";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import MashWater from "../mashWater/MashWater";
const Boil = () => {
  const { postBoil } = useSelector((state) => state.waterAndBeerData);

  const { boil } = useSelector((state) => state.recipeSteps);
  const hops = useSelector((state) => state.createRecipe.hops[0]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [refresh, setRefresh] = useState("");
  const addRecipeAction = async (hop) => {
    await dispatch(addHopRecipeAction(hop));
    setRefresh(hop._id);
  };
  const subtractRecipeAction = async (hop) => {
    await dispatch(subtractHopRecipeAction(hop));
    const newHops = await hops.filter((hops) => hops._id !== hop._id);
    await dispatch(addHopsRecipeAction(newHops));
    setRefresh(hop._id);
  };
  const addStepRecipeAction = async (step) => {
    await dispatch(addBoilStepRecipeAction(step));
    setRefresh(step.name);
  };
  const subtractStepRecipeAction = async (step) => {
    await dispatch(subtractBoilStepRecipeAction(step));
    setRefresh(step.name + "sub");
  };
  const saveSelected = async (title) => {
    await setRefresh(title);
    switch (title) {
      case "Boil":
        dispatch(addBoilRecipeAction(boil));
        break;

        break;
      default:
    }
  };
  const calculateIbu = () => {
    let sumIbu = 0;
    for (let i = 0; i < hops.length; i++) {
      sumIbu =
        sumIbu + (parseFloat(hops[i].quantity) * 100) / parseFloat(postBoil);
    }
    dispatch(addIbuRecipeAction(sumIbu));
    setRefresh("sumOfibu" + sumIbu);
  };
  const addThisProduct = async (product) => {};
  useEffect(() => {
    if (hops) {
      calculateIbu();
    }
  }, [refresh]);
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
              <ValueObtaining refresh={refresh} />
            </div>
            <div className="boil-top-section-right-container">
              <ValueSuggested />
            </div>
          </div>
        </div>
        <MashWater setRefresh={setRefresh} />

        <div className="boil-main-section">
          <div className="boil-main-section-hops">
            <h1>Hops</h1>
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
            <h1>Boil</h1>
            <CommonBrewStep
              addStepRecipeAction={addStepRecipeAction}
              subtractStepRecipeAction={subtractStepRecipeAction}
              refresh={refresh}
              title={"Boil"}
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
            onClick={() => {
              saveSelected("Boil");
              navigate("/fermentation");
            }}
          >
            Save and Go to Fermentation Page
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boil;
