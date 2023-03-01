import "../waterSourceData/waterSourceData.css";
import "./sourceWaterDiluition.css";

import { RiCloseLine } from "react-icons/ri";
const SourceWaterDiluition = ({ setModal }) => {
  return (
    <div className="waterSouceData">
      <div className="waterSouceData-modal sourceWaterDiluition">
        <div className="waterSouceData-modal-top">
          <h4 className="mt-2">Source Water Diluition</h4>
          <div
            className="waterSouceData-close"
            onClick={() => setModal("closed")}
          >
            <RiCloseLine className="waterSouceData-close-icon" />
          </div>
        </div>
        <div className="waterSouceData-salt">
          <div className="field">
            <div>Input Data</div>
            <div>
              <input type="text" placeholder="0.0" />
            </div>
          </div>
          <div className="field">
            <div>Diluition Rate in % of distilled water</div>
            <div>
              <input type="text" placeholder="0%" />
            </div>
          </div>
          <div className="field">
            <div>Output Data</div>
            <div>
              <input type="text" placeholder="0.0" />
            </div>
          </div>
          <div className="field">
            <div>Calcium (ppm)</div>
            <div>
              <input type="text" placeholder="0.0" />
            </div>
          </div>
          <div className="field">
            <div>Magnesium (ppm)</div>
            <div>
              <input type="text" placeholder="0.0" />
            </div>
          </div>
          <div className="field">
            <div>Choose Bicarbonate or Alkalinity</div>
            <div>
              <input type="text" placeholder="0.0" />
            </div>
          </div>
          <div className="field">
            <div>Alkaliniy as CaCO3</div>
            <div>
              <input type="text" placeholder="0.0" />
            </div>
          </div>
          <div className="field">
            <div>Sulfate (ppm)</div>
            <div>
              <input type="text" placeholder="0.0" />
            </div>
          </div>
          <div className="field">
            <div>Chloride (ppm)</div>
            <div>
              <input type="text" placeholder="0.0" />
            </div>
          </div>
          <div className="field">
            <div>Sodium (ppm)</div>
            <div>
              <input type="text" placeholder="0.0" />
            </div>
          </div>
          <div className="field">
            <div>Water pH</div>
            <div>
              <input type="text" placeholder="0.0" />
            </div>
          </div>
          <div className="field button sourceWaterDiluition-button">
            <div>
              <button onClick={() => setModal("saltAdditions")}>
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

export default SourceWaterDiluition;
