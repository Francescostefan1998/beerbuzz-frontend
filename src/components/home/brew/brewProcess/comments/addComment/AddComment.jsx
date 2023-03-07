import "../comment.css";
import { BsTrashFill } from "react-icons/bs";
import { FaSave } from "react-icons/fa";
import { useState } from "react";

const AddComment = ({ setAdd, addRecipeAction }) => {
  const [body, setBody] = useState({
    name: "",
    comment: "",
  });
  return (
    <div className="ingredients-others-single mt-5">
      <div>
        {" "}
        <BsTrashFill
          className="ingredients-others-single-icon"
          onClick={() => setAdd(false)}
        />
      </div>

      <div className="ingredients-others-single-grow1">
        <div>Name</div>
        <input
          type="text"
          placeholder="Name of the product"
          onChange={(e) => setBody({ ...body, name: e.target.value })}
        />
      </div>
      <div className="ingredients-others-single-grow1">
        <div>Description</div>

        <textarea
          name="comment"
          onChange={(e) => setBody({ ...body, comment: e.target.value })}
        ></textarea>
      </div>
      <div>
        {" "}
        <FaSave
          className="ingredients-others-single-icon"
          onClick={() => {
            addRecipeAction(body, "add");
            setAdd(false);
          }}
        />
      </div>
    </div>
  );
};

export default AddComment;
