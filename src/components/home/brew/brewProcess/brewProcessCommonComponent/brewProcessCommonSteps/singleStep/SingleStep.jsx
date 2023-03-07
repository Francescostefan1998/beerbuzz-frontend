import "../commonBrewStep.css";
import { BsTrashFill } from "react-icons/bs";
import { FaSave } from "react-icons/fa";
import { MdAddCircle } from "react-icons/md";
import { useState } from "react";
import { useEffect } from "react";

const SingleStep = ({ subtractStepRecipeAction, body, refresh, setShow }) => {
  const [refreshThis, setRefresh] = useState("");
  useEffect(() => {
    setRefresh(refresh);
    console.log(refresh);
  }, [refresh]);

  return (
    <div className="commonBrewStep-others-single mt-5">
      <div>
        {" "}
        <BsTrashFill
          className="commonBrewStep-others-single-icon"
          onClick={(e) => subtractStepRecipeAction(body)}
        />
      </div>

      <div className="commonBrewStep-others-single-grow1">
        <div className="none">Name</div>
        <div>{body.name}</div>
      </div>
      <div className="commonBrewStep-others-single-grow1">
        <div className="none">Step duration (minuts)</div>
        <div>{body.duration}</div>
      </div>
      <div className="commonBrewStep-others-single-grow1">
        <div className="none">Temperature (C)</div>
        <div>{body.temperature}</div>
      </div>
      <div className="commonBrewStep-others-single-grow1">
        <div className="none">{body.description}</div>

        <div className="none">
          this beer is amzing, please note to add some cheese in it
        </div>
      </div>
      <div>
        {" "}
        <MdAddCircle
          className="commonBrewStep-others-single-icon"
          onClick={(e) => setShow(true)}
        />
      </div>
      <div className="commonBrewStep-others-nonebig">
        this beer is amzing, please note to add some cheese in it
      </div>
    </div>
  );
};

export default SingleStep;
