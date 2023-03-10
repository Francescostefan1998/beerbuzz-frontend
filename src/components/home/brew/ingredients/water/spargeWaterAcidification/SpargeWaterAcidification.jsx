import "../waterSourceData/waterSourceData.css";
import "../acidAdditions/acidAdditions.css";
import "./spargeWaterAcidification.css";
import { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  initialPhSpargeAction,
  volumeSpargeAction,
  acidSpargeAction,
  acidQuantitySpargeAction,
  finalPhSpargeAction,
  alkalinitySpargeAction,
} from "../../../../../../redux/actions/spargeWater";
import { useEffect } from "react";
const SpargeWaterAcidification = ({ setModal }) => {
  const { volume } = useSelector((state) => state.sparge);
  const { alkalinity } = useSelector((state) => state.sparge);
  const { finalph } = useSelector((state) => state.sparge);
  const { initialPh } = useSelector((state) => state.sparge);
  const { acid } = useSelector((state) => state.sparge);
  const { acidQuantity } = useSelector((state) => state.sparge);
  const [refreshPage, setRefreshPage] = useState("");
  const [selectAcid, setSelectAcid] = useState(false);
  const [acidSelected, setAcid] = useState("88% Lactic");
  const [quantity, setQuantity] = useState(0);
  const [newAlkalinity, setNewAlkalinity] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSelectedValue = async (e) => {
    console.log(e);
    await dispatch(acidSpargeAction(e));
    await setAcid(e);
    setSelectAcid(false);
  };
  const updateOutputValue = async (title, value) => {
    switch (title) {
      case "10% Hydrochloric":
        dispatch(finalPhSpargeAction(initialPh - value / volume));
        dispatch(alkalinitySpargeAction((value * 1.6) / (volume / 100)));
        setNewAlkalinity((value * 1.6) / (volume / 100));

        break;
      case "37% Hydrochloric":
        dispatch(finalPhSpargeAction(initialPh - value / volume));
        dispatch(alkalinitySpargeAction((value * 2.9) / (volume / 100)));
        setNewAlkalinity((value * 2.9) / (volume / 100));

        break;
      case "10% Phosphoric":
        dispatch(finalPhSpargeAction(initialPh - value / volume));
        dispatch(alkalinitySpargeAction((value * 0.8) / (volume / 100)));
        setNewAlkalinity((value * 0.8) / (volume / 100));

        break;
      case "88% Lactic":
        dispatch(finalPhSpargeAction(initialPh - value / volume));
        dispatch(alkalinitySpargeAction((value * 4.2) / (volume / 100)));
        setNewAlkalinity((value * 4.2) / (volume / 100));

        break;
      case "10% Sulfuric":
        dispatch(finalPhSpargeAction(initialPh - value / volume));
        dispatch(alkalinitySpargeAction((value * 1.6) / (volume / 100)));
        setNewAlkalinity((value * 1.2) / (volume / 100));

        break;
      default:
    }
  };
  useEffect(() => {
    updateOutputValue(acidSelected, quantity);
  }, [refreshPage, newAlkalinity]);
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
              <input
                type="text"
                placeholder={initialPh}
                onChange={(e) => {
                  dispatch(initialPhSpargeAction(e.target.value));
                  setRefreshPage(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="field">
            <div>Water Input Unit</div>
            <div>
              <div>liter</div>
            </div>
          </div>
          <div className="field">
            <div>Sparge Water Volume</div>
            <div>
              <input
                type="text"
                placeholder={volume}
                onChange={(e) => {
                  dispatch(volumeSpargeAction(e.target.value));
                  setRefreshPage(e.target.value);
                }}
              />
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
              <input
                type="number"
                placeholder={acidQuantity}
                onChange={(e) => {
                  setQuantity(e.target.value);
                  dispatch(acidQuantitySpargeAction(e.target.value));
                  setRefreshPage(e.target.value);
                }}
              />
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
              <div>{finalph}</div>
            </div>
          </div>
          <div className="field">
            <div>Est. Acid Addition</div>
            <div>
              <div>-</div>
            </div>
          </div>
          <div className="field">
            <div>Reduced Alkaninity</div>
            <div>
              <div>{alkalinity.toFixed(2)} </div>
            </div>
          </div>
          <div className="field button">
            <div>
              <button
                onClick={() => {
                  setModal("closed");
                  navigate("/malts");
                }}
              >
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
