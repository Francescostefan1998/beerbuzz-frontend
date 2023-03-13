import "./commonBrewStep.css";
import { BsTrashFill } from "react-icons/bs";
import { FaSave } from "react-icons/fa";
import SingleStepAdd from "./singleStep/SingleStepAdd";
import SingleStep from "./singleStep/SingleStep";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { MdAddCircle } from "react-icons/md";
const CommonBrewStep = ({
  addStepRecipeAction,
  subtractStepRecipeAction,
  title,
  refresh,
}) => {
  const [showAddingStep, setShow] = useState(false);
  const [stepList, setStepList] = useState([]);
  console.log(stepList);
  const { boil } = useSelector((state) => state.recipeSteps);
  const { mash } = useSelector((state) => state.recipeSteps);
  const { fermentation } = useSelector((state) => state.recipeSteps);
  console.log(fermentation);
  const setStepListFunction = async (title, mash, boil, fermentation) => {
    console.log(title, mash, boil, fermentation);
    switch (title) {
      case "Mash":
        setStepList(mash);
        break;
      case "Boil":
        setStepList(boil);
        console.log(boil);
        break;
      case "Fermentation":
        setStepList(fermentation);
        console.log(fermentation);
        break;
      default:
    }
  };
  useEffect(() => {
    setStepListFunction(title, mash, boil, fermentation);
    console.log("ref");
  }, [refresh]);

  return (
    <div className="commonBrewStep">
      {stepList.length >= 1
        ? stepList.map((step, i) => (
            <SingleStep
              body={step}
              addStepRecipeAction={addStepRecipeAction}
              subtractStepRecipeAction={subtractStepRecipeAction}
              key={step.name}
              refresh={refresh}
              setShow={setShow}
            />
          ))
        : refresh !== "refresh check page" && (
            <SingleStepAdd
              addStepRecipeAction={addStepRecipeAction}
              refresh={refresh}
            />
          )}
      {showAddingStep && (
        <SingleStepAdd
          addStepRecipeAction={addStepRecipeAction}
          refresh={refresh}
          setShow={setShow}
        />
      )}
      {!showAddingStep && (
        <div className="commonBrewStep-others-single-icon-add">
          {refresh !== "refresh check page" ? (
            <MdAddCircle
              className="commonBrewStep-others-single-icon"
              onClick={(e) => setShow(true)}
            />
          ) : (
            <div></div>
          )}
        </div>
      )}
    </div>
  );
};

export default CommonBrewStep;
