import "./valueSuggested.css";
import { useState } from "react";
import { FaPen } from "react-icons/fa";
import { BsCheckLg } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const ValueSuggested = () => {
  const { style } = useSelector((state) => state.style);

  useEffect(() => {
    console.log(style);
  }, []);
  return (
    <div className="valueObtaining">
      <div className="valueObtaining-section">
        <div className="valueObtaining-section-title">
          <b>Style: </b>
        </div>

        <div className="valueObtaining-section-input">
          <div>{style && style.name}</div>{" "}
        </div>
      </div>
      <div className="valueObtaining-section">
        <div className="valueObtaining-section-title">ABV:</div>

        <div className="valueObtaining-section-input">
          <div>
            {style && style.stats.abv[0]} - {style && style.stats.abv[1]}
          </div>{" "}
        </div>
      </div>
      <div className="valueObtaining-section">
        <div className="valueObtaining-section-title">EBC:</div>

        <div className="valueObtaining-section-input">
          <div>
            {style && style.stats.ebc[0]} - {style && style.stats.ebc[1]}
          </div>{" "}
        </div>
      </div>
      <div className="valueObtaining-section">
        <div className="valueObtaining-section-title">IBU:</div>

        <div className="valueObtaining-section-input">
          <div>
            {style && style.stats.ibu[0]} - {style && style.stats.ibu[1]}
          </div>{" "}
        </div>
      </div>
      <div className="valueObtaining-section">
        <div className="valueObtaining-section-title">OG:</div>

        <div className="valueObtaining-section-input">
          <div>
            {style && style.stats.og[0]} - {style && style.stats.og[1]}
          </div>{" "}
        </div>
      </div>
      <div className="valueObtaining-section">
        <div className="valueObtaining-section-title">FG:</div>

        <div className="valueObtaining-section-input">
          <div>
            {style && style.stats.fg[0]} - {style && style.stats.fg[1]}
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default ValueSuggested;
