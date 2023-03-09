import "../waterSourceData/waterSourceData.css";
import "./residualAlkalinity.css";

import { RiCloseLine } from "react-icons/ri";
const ResidualAlkalinity = ({ setModal }) => {
  return (
    <div className="waterSouceData">
      <div className="waterSouceData-modal residualAlkalinity">
        <div className="waterSouceData-modal-top">
          <h4 className="mt-2">Residual Alkalinity To Be Reduced</h4>
          <div
            className="waterSouceData-close"
            onClick={() => setModal("closed")}
          >
            <RiCloseLine className="waterSouceData-close-icon" />
          </div>
        </div>
        <div className="waterSouceData-salt">
          <div className="field">
            <div>
              <b>Input Data</b>
            </div>
            <div>
              <div></div>
            </div>
          </div>
          <div className="field">
            <div>Water Input Unit</div>
            <div>
              <div style={{ marginRight: "0.8rem" }}>liter</div>
            </div>
          </div>
          <div className="field">
            <div>Target Residual Alkalinity</div>
            <div>
              <input type="number" placeholder="0.0" />
            </div>
          </div>
          <div className="field">
            <div>Mash Water Volume</div>
            <div>
              <input type="number" placeholder="0.0" />
            </div>
          </div>
          <div className="field">
            <div>
              <b>Output Data</b>
            </div>
            <div>
              <div></div>
            </div>
          </div>
          <div className="field">
            <div>Additional Alkainity Needed</div>
            <div>
              <input type="number" placeholder="0.0" />
            </div>
          </div>

          <div className="field button">
            <div>
              <button onClick={() => setModal("souceWaterDiluition")}>
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

export default ResidualAlkalinity;
