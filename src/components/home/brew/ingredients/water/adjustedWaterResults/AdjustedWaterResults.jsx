import "../waterSourceData/waterSourceData.css";
import "./adjustedWaterResults.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { RiCloseLine } from "react-icons/ri";
const AdjustedWaterResults = ({ setModal }) => {
  const { style } = useSelector((state) => state.style);

  useEffect(() => {
    console.log("style");
  }, []);
  return (
    <div className="waterSouceData">
      <div className="waterSouceData-modal adjustedWaterResults">
        <div className="waterSouceData-modal-top">
          <h4 className="mt-2">Adjusted Water Results</h4>
          <div
            className="waterSouceData-close"
            onClick={() => setModal("closed")}
          >
            <RiCloseLine className="waterSouceData-close-icon" />
          </div>
        </div>
        <div className="waterSouceData-salt">
          <div className=" column">
            <div>
              <div>Final Calcium (ppm)</div>
              <div>
                <div>0.0</div>
              </div>
            </div>

            <div>
              <div>Suggested (ppm)</div>
              <div>
                {style && style.waterProfile.calcium[0]} -{" "}
                {style && style.waterProfile.calcium[1]}
              </div>
            </div>
          </div>
          <div className=" column">
            <div>
              <div>Final Magnesium (ppm)</div>
              <div>
                <div>0.0</div>
              </div>
            </div>
            <div>
              <div>Suggested (ppm)</div>
              <div>
                {style && style.waterProfile.magnesium[0]} -{" "}
                {style && style.waterProfile.magnesium[1]}
              </div>
            </div>
          </div>
          <div className=" column">
            <div>
              <div>Final Alkalinity as CaCo3</div>
              <div>
                <div>0.0</div>
              </div>
            </div>
            <div>
              <div>Suggested (ppm)</div>
              <div>
                {style && style.waterProfile.alkalinity[0]} -{" "}
                {style && style.waterProfile.alkalinity[1]}
              </div>
            </div>
          </div>

          <div className=" column">
            <div>
              <div>Final Sulfate (ppm)</div>
              <div>
                <div>0.0</div>
              </div>
            </div>
            <div>
              <div>Suggested (ppm)</div>
              <div>
                {style && style.waterProfile.sulfate[0]} -{" "}
                {style && style.waterProfile.sulfate[1]}
              </div>
            </div>
          </div>
          <div className=" column">
            <div>
              <div>Final Chloride (ppm)</div>
              <div>
                <div>0.0</div>
              </div>
            </div>
            <div>
              <div>Suggested (ppm)</div>
              <div>
                {style && style.waterProfile.chloride[0]} -{" "}
                {style && style.waterProfile.chloride[1]}
              </div>
            </div>
          </div>
          <div className=" column">
            <div>
              <div>Final Sodium (ppm)</div>
              <div>
                <div>0.0</div>
              </div>
            </div>
            <div>
              <div>Suggested (ppm)</div>
              <div>
                {style && style.waterProfile.sodium[0]} -{" "}
                {style && style.waterProfile.sodium[1]}
              </div>
            </div>
          </div>
          <div className="field">
            <div>Total Dissolved Solids</div>
            <div>
              <div>0.0</div>
            </div>
          </div>
          <div className="field button adjustedWaterResults-button">
            <div>
              <button onClick={() => setModal("spargeWaterAcidification")}>
                Confirm and Proceed
              </button>
            </div>
            <div>
              <button onClick={() => setModal("closed")}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdjustedWaterResults;
