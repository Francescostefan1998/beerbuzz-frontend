import "./valueSuggested.css";
import { useState } from "react";
import { FaPen } from "react-icons/fa";
import { BsCheckLg } from "react-icons/bs";

const ValueSuggested = () => {
  return (
    <div className="valueObtaining">
      <div className="valueObtaining-section">
        <div className="valueObtaining-section-title">
          <b>Style: American Ipa</b>
        </div>

        <div className="valueObtaining-section-input">
          <div></div>{" "}
        </div>
      </div>
      <div className="valueObtaining-section">
        <div className="valueObtaining-section-title">ABV:</div>

        <div className="valueObtaining-section-input">
          <div>26 L</div>{" "}
        </div>
      </div>
      <div className="valueObtaining-section">
        <div className="valueObtaining-section-title">EBC:</div>

        <div className="valueObtaining-section-input">
          <div>26 L</div>{" "}
        </div>
      </div>
      <div className="valueObtaining-section">
        <div className="valueObtaining-section-title">IBU:</div>

        <div className="valueObtaining-section-input">
          <div>26 L</div>{" "}
        </div>
      </div>
      <div className="valueObtaining-section">
        <div className="valueObtaining-section-title">OG:</div>

        <div className="valueObtaining-section-input">
          <div>26 L</div>{" "}
        </div>
      </div>
      <div className="valueObtaining-section">
        <div className="valueObtaining-section-title">FG:</div>

        <div className="valueObtaining-section-input">
          <div>26 L</div>{" "}
        </div>
      </div>
    </div>
  );
};

export default ValueSuggested;
