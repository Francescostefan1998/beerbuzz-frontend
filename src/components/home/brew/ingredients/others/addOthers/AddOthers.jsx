import "../others.css";
import "./addOthers.css";
import { BsTrashFill } from "react-icons/bs";
import { FaSave } from "react-icons/fa";

const AddOthers = () => {
  return (
    <div className="ingredients-others-single mt-5">
      <div>
        {" "}
        <BsTrashFill className="ingredients-others-single-icon" />
      </div>

      <div className="ingredients-others-single-grow1">
        <div>Name</div>
        <input type="text" placeholder="Name of the product" />
      </div>
      <div className="ingredients-others-single-grow1">
        <div>Description</div>

        <textarea name="description"></textarea>
      </div>
      <div>
        {" "}
        <FaSave className="ingredients-others-single-icon" />
      </div>
    </div>
  );
};

export default AddOthers;
