import "../waterSourceData/waterSourceData.css";
import "./saltAdditions.css";

import { RiCloseLine } from "react-icons/ri";
const SaltAdditions = ({ setModal }) => {
  return (
    <div className="waterSouceData">
      <div className="waterSouceData-modal saltAdditions">
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
            <div>
              <b> Salt Additions (grams)</b>
            </div>
            <div></div>
          </div>
          <div className="field">
            <div>Gypsum CaSO4*2H2O</div>
            <div>
              <input type="text" placeholder="0.0" />
            </div>
          </div>
          <div className="field">
            <div>Calcium Chloride CaCl2*2H2O</div>
            <div>
              <input type="text" placeholder="0.0" />
            </div>
          </div>

          <div className="field">
            <div>Epson Salt MgSO4*7H2O</div>
            <div>
              <input type="text" placeholder="0.0" />
            </div>
          </div>
          <div className="field">
            <div>Baking Soda NaHCO3</div>
            <div>
              <input type="text" placeholder="0.0" />
            </div>
          </div>
          <div className="field">
            <div>Canning Salt NaCl</div>
            <div>
              <input type="text" placeholder="0.0" />
            </div>
          </div>
          <div className="field">
            <div>
              {" "}
              <b>Salt Contributions (ppm)</b>
            </div>
            <div></div>
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
            <div>Adjusted Residual Alkalinity as CaCO3</div>
            <div>
              <input type="text" placeholder="0.0" />
            </div>
          </div>
          <div className="field button saltAdditions-button">
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

export default SaltAdditions;
