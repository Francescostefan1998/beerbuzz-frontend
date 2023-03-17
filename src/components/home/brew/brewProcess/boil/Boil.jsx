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
      console.log(hops);
      let utilizitaion = 0;

      if (parseFloat(hops[i].minutsBoil) < 5) {
        utilizitaion = 0.05;
      } else if (
        parseFloat(hops[i].minutsBoil) >= 5 &&
        parseFloat(hops[i].minutsBoil) < 10
      ) {
        utilizitaion = 0.08;
      } else if (
        parseFloat(hops[i].minutsBoil) >= 10 &&
        parseFloat(hops[i].minutsBoil) < 15
      ) {
        utilizitaion = 0.11;
      } else if (
        parseFloat(hops[i].minutsBoil) >= 15 &&
        parseFloat(hops[i].minutsBoil) < 25
      ) {
        utilizitaion = 0.15;
      } else if (
        parseFloat(hops[i].minutsBoil) >= 25 &&
        parseFloat(hops[i].minutsBoil) < 35
      ) {
        utilizitaion = 0.18;
      } else if (
        parseFloat(hops[i].minutsBoil) >= 35 &&
        parseFloat(hops[i].minutsBoil) < 50
      ) {
        utilizitaion = 0.21;
      } else if (parseFloat(hops[i].minutsBoil) >= 50) {
        utilizitaion = 0.24;
      }
      sumIbu =
        sumIbu +
        (parseFloat(hops[i].quantity) *
          1000 *
          utilizitaion *
          parseFloat(hops[i].alpha)) /
          parseFloat(postBoil);
      console.log(sumIbu);
      console.log(utilizitaion);
    }

    dispatch(addIbuRecipeAction(sumIbu));
    setRefresh("sumOfibu" + sumIbu);
  };
  const addThisProduct = async (product) => {
    setRefresh(product);
  };
  useEffect(() => {
    if (hops) {
      calculateIbu();
      setTimeout(() => {
        calculateIbu();
      }, 500);
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
  );
};

export default Boil;
