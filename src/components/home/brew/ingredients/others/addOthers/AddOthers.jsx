import "./addOthers.css";
import { BsTrashFill } from "react-icons/bs";
import { MdAddCircle } from "react-icons/md";

const AddOthers = () => {
  return (
    <div className="ingredients-others-single">
      <div>
        {" "}
        <BsTrashFill className="ingredients-others-single-icon" />
      </div>

      <div>name</div>
      <div>description</div>
      <div>
        {" "}
        <MdAddCircle className="ingredients-others-single-icon" />
      </div>
    </div>
  );
};

export default AddOthers;
