import "./adjustedWaterResults.css";
import "../waterSourceData/waterSourceData.css";
import { RiCloseLine } from "react-icons/ri";
const AdjustedWaterResults = ({ setModal }) => {
  return (
    <div className="waterSouceData">
      <div className="waterSouceData-modal">
        <div className="waterSouceData-modal-top">
          <h4 className="mt-2">Souce Water Data</h4>
          <div
            className="waterSouceData-close"
            onClick={() => setModal("closed")}
          >
            <RiCloseLine className="waterSouceData-close-icon" />
          </div>
        </div>
        <div className="waterSouceData-salt">
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
          <div className="field button">
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
