import "./commonBrewStep.css";
import { BsTrashFill } from "react-icons/bs";
import { FaSave } from "react-icons/fa";
import SingleStepAdd from "./singleStep/SingleStepAdd";
import SingleStep from "./singleStep/SingleStep";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

const CommonBrewStep = ({
  addStepRecipeAction,
  subtractStepRecipeAction,
  title,
}) => {
  const [stepList, setStepList] = useState([]);
  const [refresh, setRefresh] = useState("");
  const { mash } = useSelector((state) => state.recipeSteps);
  const { boil } = useSelector((state) => state.recipeSteps);
  const { fermentation } = useSelector((state) => state.recipeSteps);

  const setTheList = async (title) => {
    switch (title) {
      case "Mash":
        setStepList(mash);

        break;
      case "Boil":
        setStepList(boil);

        break;
      case "Fermentation":
        setStepList(fermentation);

        break;
      default:
    }
  };

  useEffect(() => {
    setTheList(title);
  }, [title, refresh]);
  return (
    <div className="commonBrewStep">
      {stepList.map((step, i) => (
        <SingleStep
          body={step}
          addStepRecipeAction={addStepRecipeAction}
          subtractStepRecipeAction={subtractStepRecipeAction}
          key={step.name}
          refresh={refresh}
        />
      ))}
      <SingleStepAdd addStepRecipeAction={addStepRecipeAction} />
    </div>
  );
};

export default CommonBrewStep;
