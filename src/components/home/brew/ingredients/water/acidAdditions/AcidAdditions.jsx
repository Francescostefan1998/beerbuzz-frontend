import "../waterSourceData/waterSourceData.css";
import "./acidAdditions.css";
import { RiCloseLine } from "react-icons/ri";
import { useState } from "react";
const AcidAdditions = ({ setModal }) => {
  const [selectAcid, setSelectAcid] = useState(false);
  const [acid, setAcid] = useState("88% Lactic");
  const handleSelectedValue = async (e) => {
    console.log(e);
    await setAcid(e);
    setSelectAcid(false);
  };
  return (
    <div className="waterSouceData">
      <div className="waterSouceData-modal acidAddition">
        <div className="waterSouceData-modal-top">
          <h4 className="mt-2">Acid Addition</h4>
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
              <b>Input data</b>
            </div>
            <div>
              <input type="text" placeholder="0.0" />
            </div>
          </div>
          <div className="field" onClick={() => setSelectAcid(true)}>
            <div>Select Acid</div>
            {selectAcid && (
              <div className="acid-selections-main">
                <div className="acid-selections">
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
            <div>
              <input type="text" placeholder={acid} />
            </div>
          </div>
          <div className="field">
            <div>Mash Water Addition (ml)</div>
            <div>
              <input type="text" placeholder="0.0" />
            </div>
          </div>
          <div className="field">
            <div>
              <b>Output data</b>
            </div>
            <div>
              <input type="text" placeholder="0.0" />
            </div>
          </div>
          <div className="field">
            <div>Est. Acid Addition (ml)</div>
            <div>
              <input type="text" placeholder="0.0" />
            </div>
          </div>
          <div className="field">
            <div>Alkalinity Reduced (as CaCO3)</div>
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

export default AcidAdditions;
