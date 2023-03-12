import "./bottomBar.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const BottomBar = ({
  propNavigate,
  proceedWater,
  backWater,
  setStepWater,
  style,
}) => {
  const navigate = useNavigate();
  useEffect(() => {}, [proceedWater, backWater, style]);
  return (
    <div className="bottomBar-list-proceed" style={style}>
      {/*<div
        className="bottomBar-list-proceed-button"
        onClick={() => navigate("/water")}
      >
        Proceed
  </div>*/}
      {proceedWater || backWater !== "" ? (
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
      ) : (
        <div
          className="bottomBar-list-proceed-button"
          onClick={() => navigate("/water")}
        >
          Proceed
        </div>
      )}
    </div>
  );
};

export default BottomBar;
