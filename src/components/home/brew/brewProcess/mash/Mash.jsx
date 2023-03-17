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
import {
  addEbcbRecipeAction,
  addOgRecipeAction,
  addFgRecipeAction,
  addAbvRecipeAction,
} from "../../../../../redux/actions/recipe";
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
  const { equipmentEfficienty } = useSelector(
    (state) => state.waterAndBeerData
  );
  const yeasts = useSelector((state) => state.createRecipe.yeasts[0]);

  const maltsList = useSelector((state) => state.createRecipe.malts[0]);
  const { postBoil } = useSelector((state) => state.waterAndBeerData);
  const [refresh, setRefresh] = useState("");
  console.log(refresh);
  const [newProduct, setRefreshAddthisProduct] = useState("");
  console.log(newProduct);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const saveSelected = (title) => {
    setRefresh(title);
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
    let originalGravity = 0;
    let averageAttenuation = 0;

    for (let i = 0; i < maltsList.length; i++) {
      sumOfEbc =
        sumOfEbc +
        parseFloat(maltsList[i].color) * parseFloat(maltsList[i].quantity);
    }
    let ebcBeer = sumOfEbc / parseFloat(postBoil);
    dispatch(addEbcbRecipeAction(ebcBeer));
    for (let i = 0; i < maltsList.length; i++) {
      originalGravity =
        originalGravity +
        (parseFloat(maltsList[i].yield) / 100) *
          parseFloat(maltsList[i].quantity);
    }
    let originalGravityBeer =
      1 +
      (originalGravity * (parseFloat(equipmentEfficienty) / 100)) /
        (parseFloat(postBoil) * 3.9);
    dispatch(addOgRecipeAction(originalGravityBeer));
    for (let i = 0; i < yeasts.length; i++) {
      averageAttenuation =
        averageAttenuation +
        parseFloat(yeasts[i].attenuation) / parseFloat(yeasts.length);
    }
    let finalGravity =
      1 +
      ((originalGravity * (parseFloat(equipmentEfficienty) / 100)) /
        (parseFloat(postBoil) * 3.9)) *
        ((100 - averageAttenuation) / 100);

    dispatch(addFgRecipeAction(finalGravity));

    let alcool = (originalGravityBeer - finalGravity) * 131.25;
    dispatch(addAbvRecipeAction(alcool));

    setRefresh("sumOfEbc" + originalGravity + ebcBeer + finalGravity);
  };
  const addRecipeAction = (malt) => {
    dispatch(addMaltRecipeAction(malt));
    setRefresh(malt._id + malt.quatity);
  };
  const subtractRecipeAction = (malt) => {
    dispatch(subtractMaltRecipeAction(malt));
    const newMalts = maltsList.filter((malts) => malts._id !== malt._id);

    dispatch(addMaltsRecipeAction(newMalts));
    setRefresh(malt._id + malt.quantity);
  };
  const addStepRecipeAction = (step) => {
    dispatch(addMashStepRecipeAction(step));
    setRefresh(step.name);
  };
  const subtractStepRecipeAction = (step) => {
    dispatch(subtractMashStepRecipeAction(step));
    setRefresh(step.name + "sub");
  };
  const addThisProduct = (product) => {
    setRefreshAddthisProduct(product);
    setTimeout(() => {
      calculateAverageEbcAndYeld();
    }, 500);

    setRefresh(product);
  };

  useEffect(() => {
    if (maltsList) {
      calculateAverageEbcAndYeld();
    }
  }, [refresh, newProduct]);

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
  );
};

export default Mash;
