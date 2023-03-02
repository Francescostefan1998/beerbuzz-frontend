import "../commonBrewStep.css";
import { BsTrashFill } from "react-icons/bs";
import { FaSave } from "react-icons/fa";

const SingleStepAdd = () => {
  return (
    <div className="commonBrewStep-others-single mt-5">
      <div>
        {" "}
        <BsTrashFill className="commonBrewStep-others-single-icon" />
      </div>

      <div className="commonBrewStep-others-single-grow1">
        <div className="none">Name</div>
        <input type="text" placeholder="Name of the product" />
      </div>
      <div className="commonBrewStep-others-single-grow1">
        <div className="none">Step duration (minuts)</div>
        <input type="text" placeholder="Step Duration" />
      </div>
      <div className="commonBrewStep-others-single-grow1">
        <div className="none">Temperature (C)</div>
        <input type="text" placeholder="Temperature" />
      </div>
      <div className="commonBrewStep-others-single-grow1">
        <div className="none">Description</div>

        <textarea name="description and note" className="none"></textarea>
      </div>
      <div>
        {" "}
        <FaSave className="commonBrewStep-others-single-icon" />
      </div>
      <textarea
        name="description and note"
        className="commonBrewStep-others-nonebig"
      ></textarea>
    </div>
  );
};

export default SingleStepAdd;
