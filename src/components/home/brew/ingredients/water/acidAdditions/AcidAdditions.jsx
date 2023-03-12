import "../waterSourceData/waterSourceData.css";
import "./acidAdditions.css";
import { RiCloseLine } from "react-icons/ri";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { subtractAcidRecipeAction } from "../../../../../../redux/actions/recipe";
import { addAcidRecipeAction } from "../../../../../../redux/actions/recipe";
import { afterAcidOriginalAlkalinityAction } from "../../../../../../redux/actions/afterSalt";
const AcidAdditions = ({ setModal, setZindexPriority }) => {
  const { mashVolume } = useSelector((state) => state.waterAndBeerData);
  const { alkalinity } = useSelector((state) => state.afterSalt);

  const [value, setValue] = useState(0);
  const [selectAcid, setSelectAcid] = useState(false);
  const [acid, setAcid] = useState("88% Lactic");
  const [newAlkalinity, setNewAlkalinity] = useState(0);
  const dispatch = useDispatch();
  const handleSelectedValue = async (e) => {
    console.log(e);
    await setAcid(e);
    await verifyIfSelected(e, value);
    setSelectAcid(false);
  };
  const changeValue = async (e) => {
    await setValue(e);
    verifyIfSelected(acid, e);
  };
  useEffect(() => {
    console.log(value);
    if (selectAcid) {
      setZindexPriority("0");
    } else {
      setZindexPriority("3");
    }
  }, [value, acid, selectAcid]);
  const verifyIfSelected = (title, value) => {
    switch (title) {
      case "10% Hydrochloric":
        setNewAlkalinity((value * 1.6) / (mashVolume / 100));
        dispatch(subtractAcidRecipeAction({ name: title, quantity: value }));
        dispatch(addAcidRecipeAction({ name: title, quantity: value }));

        break;
      case "37% Hydrochloric":
        setNewAlkalinity((value * 2.9) / (mashVolume / 100));
        dispatch(subtractAcidRecipeAction({ name: title, quantity: value }));
        dispatch(addAcidRecipeAction({ name: title, quantity: value }));

        break;
      case "10% Phosphoric":
        setNewAlkalinity((value * 0.8) / (mashVolume / 100));
        dispatch(subtractAcidRecipeAction({ name: title, quantity: value }));
        dispatch(addAcidRecipeAction({ name: title, quantity: value }));

        break;
      case "88% Lactic":
        setNewAlkalinity((value * 4.2) / (mashVolume / 100));
        dispatch(subtractAcidRecipeAction({ name: title, quantity: value }));
        dispatch(addAcidRecipeAction({ name: title, quantity: value }));

        break;
      case "10% Sulfuric":
        setNewAlkalinity((value * 1.2) / (mashVolume / 100));
        dispatch(subtractAcidRecipeAction({ name: title, quantity: value }));
        dispatch(addAcidRecipeAction({ name: title, quantity: value }));

        break;
      default:
    }
  };

  return (
    <div className="waterSouceData">
      <div className="waterSouceData-modal acidAddition">
        <div className="waterSouceData-modal-top">
          <h4 className="mt-2">Acid Addition</h4>
        </div>
        <div className="waterSouceData-salt">
          <div className="field">
            <div>
              <b>Input data</b>
            </div>
            <div>
              <div></div>
            </div>
          </div>
          <div
            className="field special-field-acid-addiction"
            onClick={() => setSelectAcid(true)}
          >
            <div>Select Acid</div>
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
            <div>
              <input type="text" placeholder={acid} />
            </div>
          </div>
          <div className="field">
            <div>Mash Water Addition (ml)</div>
            <div>
              <input
                type="number"
                placeholder={`${value}`}
                onChange={(e) => changeValue(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <div>
              <b>Output data</b>
            </div>
            <div>
              <div></div>
            </div>
          </div>
          <div className="field">
            <div>Est. Acid Addition (ml)</div>
            <div>
              <div></div>
            </div>
          </div>
          <div className="field">
            <div>Alkalinity Reduced (as CaCO3)</div>
            <div>
              <div>{newAlkalinity.toFixed(2)}</div>
            </div>
          </div>

          <div className="field button">
            <div>
              <button
                onClick={() => {
                  dispatch(
                    afterAcidOriginalAlkalinityAction(
                      alkalinity - newAlkalinity
                    )
                  );
                  setModal("adjustedWaterResults");
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

export default AcidAdditions;
