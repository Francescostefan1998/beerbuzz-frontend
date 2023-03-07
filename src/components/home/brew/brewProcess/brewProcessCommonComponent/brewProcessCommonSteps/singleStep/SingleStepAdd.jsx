import "../commonBrewStep.css";
import { BsTrashFill } from "react-icons/bs";
import { FaSave } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";

const SingleStepAdd = ({ addStepRecipeAction, refresh }) => {
  const [stepBody, setStepBody] = useState({
    name: "",
    duration: 0,
    temperature: 0,
    description: "",
  });
  useEffect(() => {
    console.log("r");
  }, [refresh]);
  return (
    <div className="commonBrewStep-others-single mt-5">
      <div>
        {" "}
        <BsTrashFill className="commonBrewStep-others-single-icon" />
      </div>

      <div className="commonBrewStep-others-single-grow1">
        <div className="none">Name</div>
        <input
          type="text"
          placeholder="Name of the product"
          onChange={(e) => setStepBody({ ...stepBody, name: e.target.value })}
        />
      </div>
      <div className="commonBrewStep-others-single-grow1">
        <div className="none">Step duration (minuts)</div>
        <input
          type="text"
          placeholder="Step Duration"
          onChange={(e) =>
            setStepBody({ ...stepBody, duration: e.target.value })
          }
        />
      </div>
      <div className="commonBrewStep-others-single-grow1">
        <div className="none">Temperature (C)</div>
        <input
          type="text"
          placeholder="Temperature"
          onChange={(e) =>
            setStepBody({ ...stepBody, temperature: e.target.value })
          }
        />
      </div>
      <div className="commonBrewStep-others-single-grow1">
        <div className="none">Description</div>

        <textarea
          name="description and note"
          className="none"
          onChange={(e) =>
            setStepBody({ ...stepBody, description: e.target.value })
          }
        ></textarea>
      </div>
      <div>
        {" "}
        <FaSave
          className="commonBrewStep-others-single-icon"
          onClick={(e) => {
            stepBody.name !== ""
              ? addStepRecipeAction(stepBody)
              : alert("Please enter a name for the Brew Step");
          }}
        />
      </div>
      <textarea
        name="description and note"
        className="commonBrewStep-others-nonebig"
        onChange={(e) =>
          setStepBody({ ...stepBody, description: e.target.value })
        }
      ></textarea>
    </div>
  );
};

export default SingleStepAdd;
