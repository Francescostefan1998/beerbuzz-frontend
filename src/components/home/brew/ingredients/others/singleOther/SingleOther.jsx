import "../others.css";
import { BsTrashFill } from "react-icons/bs";
import { MdAddCircle } from "react-icons/md";
const SingleOther = ({ engredient, setAdd, subtractRecipeAction }) => {
  return (
    <div className="ingredients-others-single mt-4">
      <div>
        {" "}
        <BsTrashFill
          className="ingredients-others-single-icon"
          onClick={() => subtractRecipeAction(engredient)}
        />
      </div>

      {engredient && (
        <div className="ingredients-others-single-grow1">{engredient.name}</div>
      )}
      {engredient && (
        <div className="ingredients-others-single-grow1">
          {" "}
          {engredient.description}
        </div>
      )}
      <div>
        {" "}
        <MdAddCircle
          className="ingredients-others-single-icon"
          onClick={() => setAdd(true)}
        />
      </div>
    </div>
  );
};

export default SingleOther;
