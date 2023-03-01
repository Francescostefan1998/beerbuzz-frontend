import "../waterSourceData/waterSourceData.css";
import "../acidAdditions/acidAdditions.css";
import "./spargeWaterAcidification.css";
import { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
const SpargeWaterAcidification = ({ setModal }) => {
  const [selectAcid, setSelectAcid] = useState(false);
  const [acid, setAcid] = useState("88% Lactic");
  const handleSelectedValue = async (e) => {
    console.log(e);
    await setAcid(e);
    setSelectAcid(false);
  };
  return (
    <div className="waterSouceData">
      <div className="waterSouceData-modal  spargeWaterAcidification">
        <div className="waterSouceData-modal-top">
          <h4 className="mt-2">Sparge Water Acidification</h4>
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
            <div></div>
          </div>
          <div className="field">
            <div>Target Sparge Water pH @ 20C</div>
            <div>
              <input type="text" placeholder="0.0" />
            </div>
          </div>
          <div className="field">
            <div>Water Input Unit</div>
            <div>
              <input type="text" placeholder="liter" />
            </div>
          </div>
          <div className="field">
            <div>Sparge Water Volume</div>
            <div>
              <input type="text" placeholder="0.0" />
            </div>
          </div>
          <div className="field" onClick={() => setSelectAcid(true)}>
            <div>Acid</div>
            <div>
              <input type="text" placeholder={acid} />
            </div>
            {selectAcid && (
              <div className="acid-selections-main">
                <div id="acid-selections-container">
                  <div className="acid-selections-section">
                    <div className="mt-3">Select Value</div>
                    <div
                      className="waterSouceData-close"
                      onClick={() => handleSelectedValue("88% Lactic")}
                    >
                      <RiCloseLine className="waterSouceData-close-icon" />
                    </div>
                  </div>
                  <div
                    className="acid-selections-section"
                    onClick={(e) => handleSelectedValue(e.target.textContent)}
                  >
                    10% Hydrochloric
                  </div>
                  <div
                    className="acid-selections-section"
                    onClick={(e) => handleSelectedValue(e.target.textContent)}
                  >
                    37% Hydrochloric
                  </div>
                  <div
                    className="acid-selections-section"
                    onClick={(e) => handleSelectedValue(e.target.textContent)}
                  >
                    10% Phosphoric
                  </div>
                  <div
                    className="acid-selections-section"
                    onClick={(e) => handleSelectedValue(e.target.textContent)}
                  >
                    88% Lactic
                  </div>
                  <div
                    className="acid-selections-section"
                    onClick={(e) => handleSelectedValue(e.target.textContent)}
                  >
                    10% Sulfuric
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="field">
            <div>Sparge Water Addition(ml)</div>
            <div>
              <input type="text" placeholder="0.0" />
            </div>
          </div>
          <div className="field">
            <div>
              <b>Output Data</b>
            </div>
            <div></div>
          </div>
          <div className="field">
            <div>Raw Source Water pH @ 20C</div>
            <div>
              <input type="text" placeholder="0.0" />
            </div>
          </div>
          <div className="field">
            <div>Est. Acid Addition</div>
            <div>
              <input type="text" placeholder="0.0" />
            </div>
          </div>
          <div className="field">
            <div>Remaining Alkaninity</div>
            <div>
              <input type="text" placeholder="0.0" />
            </div>
          </div>
          <div className="field button">
            <div>
              <button onClick={() => setModal("closed")}>
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

export default SpargeWaterAcidification;
