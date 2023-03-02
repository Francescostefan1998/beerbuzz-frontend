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
        <div>Name</div>
        <input type="text" placeholder="Name of the product" />
      </div>
      <div className="commonBrewStep-others-single-grow1">
        <div>Description</div>

        <textarea name="description"></textarea>
      </div>
      <div>
        {" "}
        <FaSave className="commonBrewStep-others-single-icon" />
      </div>
    </div>
  );
};

export default SingleStepAdd;
