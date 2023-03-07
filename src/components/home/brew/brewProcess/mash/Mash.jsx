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
import { addMaltRecipeAction } from "../../../../../redux/actions/ingredients";
import { subtractMaltRecipeAction } from "../../../../../redux/actions/ingredients";
import { addMashStepRecipeAction } from "../../../../../redux/actions/steps";
import { subtractMashStepRecipeAction } from "../../../../../redux/actions/steps";

const Mash = () => {
  const [refresh, setRefresh] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const addRecipeAction = async (malt) => {
    await dispatch(addMaltRecipeAction(malt));
    setRefresh(malt._id);
  };
  const subtractRecipeAction = async (malt) => {
    await dispatch(subtractMaltRecipeAction(malt));
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
  const addThisProduct = async (product) => {};

  useEffect(() => {
    console.log(refresh);
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
              addProduct={addRecipeAction}
              subtractProduct={subtractRecipeAction}
              refresh={refresh}
              colorOff={"colorOff"}
              addThisProduct={addThisProduct}
            />
          </div>
          <div className="mash-main-section-process">
            <h1>Mash Process</h1>
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
