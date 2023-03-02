import "./maltSingleListElement.css";
import { GiWheat } from "react-icons/gi";
import { useState } from "react";

const MaltSingleListElement = () => {
  const [selected, setSelected] = useState("malts-container-inside-malt-none");
  return (
    <div
      className="malts-container-inside-malt"
      id={selected}
      onClick={() => {
        selected !== "malts-container-inside-malt-purple"
          ? setSelected("malts-container-inside-malt-purple")
          : setSelected("malts-container-inside-malt-none");
      }}
    >
      <div>
        <GiWheat className="malts-container-inside-malt-icon" />
      </div>
      <div className="malts-container-inside-malt-description">
        <div className="malts-container-inside-malt-description-section">
          <b>Admiral Pils</b>
        </div>
        <div className="malts-container-inside-malt-description-section">
          <div>3.7 EBC</div>
          <div>-</div>
          <div>1037</div>
          <div>-</div>
          <div>grain</div>
        </div>
      </div>
    </div>
  );
};

export default MaltSingleListElement;
