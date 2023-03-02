import "./commonBrewStep.css";
import { BsTrashFill } from "react-icons/bs";
import { FaSave } from "react-icons/fa";
import SingleStepAdd from "./singleStep/SingleStepAdd";
import SingleStep from "./singleStep/SingleStep";

const CommonBrewStep = () => {
  return (
    <div className="commonBrewStep">
      <SingleStep />
      <SingleStepAdd />
    </div>
  );
};

export default CommonBrewStep;
