import "./bottomBar.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const BottomBar = ({
  propNavigate,
  proceedWater,
  backWater,
  setStepWater,
  style,
  prew,
  next,
}) => {
  const navigate = useNavigate();
  useEffect(() => {}, [proceedWater, backWater, style]);
  return (
    <div className="bottomBar-list-proceed" style={style}>
      {proceedWater &&
      backWater !== "" &&
      proceedWater !== "malts" &&
      backWater !== "selectstyle" ? (
        <>
          <div
            className="bottomBar-list-proceed-button"
            onClick={() => setStepWater(backWater)}
          >
            Back
          </div>
          <div
            className="bottomBar-list-proceed-button"
            onClick={() => setStepWater(proceedWater)}
          >
            Save and Proceed
          </div>
        </>
      ) : proceedWater === "waterSourceData" ? (
        <>
          <div
            className="bottomBar-list-proceed-button"
            onClick={() => navigate("/selectstyle")}
          >
            Back
          </div>
          <div
            className="bottomBar-list-proceed-button"
            onClick={() => setStepWater("waterSourceData")}
          >
            Save and Proceed
          </div>
        </>
      ) : proceedWater === "residualAlkalinityTarger" ? (
        <>
          <div
            className="bottomBar-list-proceed-button"
            onClick={() => setStepWater("closed")}
          >
            Back
          </div>
          <div
            className="bottomBar-list-proceed-button"
            onClick={() => setStepWater(proceedWater)}
          >
            Save and Proceed
          </div>
        </>
      ) : proceedWater === "malts" ? (
        <>
          <div
            className="bottomBar-list-proceed-button"
            onClick={() => setStepWater(backWater)}
          >
            Back
          </div>
          <div
            className="bottomBar-list-proceed-button"
            onClick={() => navigate("/malts")}
          >
            Save and Proceed
          </div>
        </>
      ) : (
        <>
          <div
            className="bottomBar-list-proceed-button"
            onClick={() => navigate(prew)}
          >
            Back
          </div>
          <div
            className="bottomBar-list-proceed-button"
            onClick={() => navigate(next)}
          >
            Save and Proceed
          </div>
        </>
      )}
    </div>
  );
};

export default BottomBar;
