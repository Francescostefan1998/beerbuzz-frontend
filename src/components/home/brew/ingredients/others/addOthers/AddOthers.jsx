import "../others.css";
import "./addOthers.css";
import { BsTrashFill } from "react-icons/bs";
import { FaSave } from "react-icons/fa";
import { useState } from "react";

const AddOthers = ({ addRecipeAction, setAdd }) => {
  const [body, setBody] = useState({
    name: "",
    description: "",
  });
  const postOther = async (others, myBody) => {
    const res = await fetch(`http://localhost:3001/${others}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myBody),
    });
    const data = await res.json();
    console.log(data);
    await addRecipeAction(data);
  };
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
          name="description"
          onChange={(e) => setBody({ ...body, description: e.target.value })}
        ></textarea>
      </div>
      <div>
        {" "}
        <FaSave
          className="ingredients-others-single-icon"
          onClick={() => {
            postOther("others", body);
            setAdd(false);
          }}
        />
      </div>
    </div>
  );
};

export default AddOthers;
