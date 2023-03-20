import "../commonBrewStep.css";
import { BsTrashFill } from "react-icons/bs";
import { FaSave } from "react-icons/fa";
import { MdAddCircle } from "react-icons/md";
import { useState } from "react";
import { useEffect } from "react";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { FaCompressArrowsAlt } from "react-icons/fa";

const SingleStep = ({ subtractStepRecipeAction, body, refresh, setShow }) => {
  const [refreshThis, setRefresh] = useState("");
  const [showDescription, setShowDescription] = useState(true);
  useEffect(() => {
    setRefresh(refresh);
    console.log(showDescription);
  }, [refresh, showDescription]);

  return (
    <>
      <div className="commonBrewStep-others-single mt-3">
        <div>
          {" "}
          {refresh !== "refresh check page" ? (
            <BsTrashFill
              className="commonBrewStep-others-single-icon"
              onClick={(e) => subtractStepRecipeAction(body)}
            />
          ) : (
            <div></div>
          )}
        </div>

        <div className="commonBrewStep-others-single-grow1-first">
          <div>Name: {body.name},</div>
        </div>
        <div className="commonBrewStep-others-single-grow1">
          <div>Duration: {body.duration}min, </div>
        </div>
        <div className="commonBrewStep-others-single-grow1">
          <div>Temp: {body.temperature}(C)</div>
        </div>

        <div> </div>

        {showDescription && refresh !== "refresh check page" ? (
          <FaExpandArrowsAlt
            className="commonBrewStep-others-single-icon"
            onClick={(e) => setShowDescription(false)}
          />
        ) : !showDescription && refresh !== "refresh check page" ? (
          <FaCompressArrowsAlt
            className="commonBrewStep-others-single-icon"
            onClick={(e) => setShowDescription(true)}
          />
        ) : (
          <div></div>
        )}
      </div>
      {!showDescription && (
        <div className="commonBrewStep-others-single-grow1 flex-grow3">
          <div className="none">Description: {body.description}</div>
        </div>
      )}
      {refresh === "refresh check page" ? (
        <div className="commonBrewStep-others-single-grow1 flex-grow3-checkPage">
          <div className="none">Description: {body.description}</div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default SingleStep;
