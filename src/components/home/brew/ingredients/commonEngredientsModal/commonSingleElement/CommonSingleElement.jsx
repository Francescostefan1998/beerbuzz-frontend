import "./commonSingleElement.css";
import { GiWheat } from "react-icons/gi";
import { useState } from "react";

const CommonSingleElement = ({ icon, colorOrIbu }) => {
  const [selected, setSelected] = useState(
    "common-element-container-inside-malt-none"
  );
  return (
    <div
      className="common-element-container-inside-malt"
      id={selected}
      onClick={() => {
        selected !== "common-element-container-inside-malt-purple"
          ? setSelected("common-element-container-inside-malt-purple")
          : setSelected("common-element-container-inside-malt-none");
      }}
    >
      <div>{icon}</div>
      <div className="common-element-container-inside-malt-description">
        <div className="common-element-container-inside-malt-description-section">
          <b>Admiral Pils</b>
        </div>
        <div className="common-element-container-inside-malt-description-section">
          <div>{colorOrIbu}</div>
          <div>-</div>
          <div>1037</div>
          <div>-</div>
          <div>grain</div>
        </div>
      </div>
    </div>
  );
};

export default CommonSingleElement;
