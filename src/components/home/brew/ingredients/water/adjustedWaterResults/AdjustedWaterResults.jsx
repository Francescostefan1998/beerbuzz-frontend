import "../waterSourceData/waterSourceData.css";
import "./adjustedWaterResults.css";

import { RiCloseLine } from "react-icons/ri";
const AdjustedWaterResults = ({ setModal }) => {
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
              <div>0.0</div>
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
              <div>0.0</div>
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
              <div>0.0</div>
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
              <div>0.0</div>
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
              <div>0.0</div>
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
              <div>0.0</div>
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
              <button>Confirm and Proceed</button>
            </div>
            <div>
              <button>Clear value</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdjustedWaterResults;
