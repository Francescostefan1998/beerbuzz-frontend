import "./commonBrewStep.css";
import { BsTrashFill } from "react-icons/bs";
import { FaSave } from "react-icons/fa";
import SingleStepAdd from "./singleStep/SingleStepAdd";

const CommonBrewStep = () => {
  return (
    <div className="commonBrewStep">
      <div></div>
      <SingleStepAdd />
    </div>
  );
};

export default CommonBrewStep;
