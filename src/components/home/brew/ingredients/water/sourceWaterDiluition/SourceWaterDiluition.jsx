import "../waterSourceData/waterSourceData.css";
import "./sourceWaterDiluition.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RiCloseLine } from "react-icons/ri";
import { useEffect } from "react";
import { useState } from "react";
import {
  updateOriginalAlkalinityAction,
  updateOriginalCalciumAction,
  updateOriginalMagnesiumAction,
  updateOriginalSulfateAction,
  updateOriginalChlorideAction,
  updateOriginalSodiumAction,
  updateOriginalPhAction,
} from "../../../../../../redux/actions/updatedWater";

const SourceWaterDiluition = ({ setModal }) => {
  const dispatch = useDispatch();
  const { calcium } = useSelector((state) => state.originalWater);
  const { magnesium } = useSelector((state) => state.originalWater);
  const { alkalinity } = useSelector((state) => state.originalWater);
  const { chloride } = useSelector((state) => state.originalWater);
  const { sulfate } = useSelector((state) => state.originalWater);
  const { sodium } = useSelector((state) => state.originalWater);
  const { ph } = useSelector((state) => state.originalWater);
  const [newCalcium, setCa] = useState(0);
  const [newMagnesium, setMg] = useState(0);
  const [newChloride, setCl] = useState(0);
  const [newSulfate, setS] = useState(0);
  const [newSodium, setNa] = useState(0);
  const [newAlkalinity, setCaCO3] = useState(0);
  const [newPh, setPh] = useState(0);

  const [diluition, setDiluitionData] = useState(0);
  useEffect(() => {
    setDiluitionData();
    setTimeout(() => {
      saveResults();
    }, 200);
  }, [diluition]);
  const setDiluition = async (value) => {
    await setDiluitionData(value);
    setCa((100 - value) * 0.01 * calcium);
    setMg((100 - value) * 0.01 * magnesium);
    setCl((100 - value) * 0.01 * chloride);
    setS((100 - value) * 0.01 * sulfate);
    setNa((100 - value) * 0.01 * sodium);
    setCaCO3((100 - value) * 0.01 * alkalinity);
    setPh(
      ((7 * value + ph * (100 - value)) / 100 + ph * (10 - value / 10)) /
        (10 - value / 10 + 1)
    );
  };
  const saveResults = () => {
    console.log(newAlkalinity, newCalcium);
    dispatch(updateOriginalAlkalinityAction(newAlkalinity));
    dispatch(updateOriginalCalciumAction(newCalcium));
    dispatch(updateOriginalMagnesiumAction(newMagnesium));
    dispatch(updateOriginalSulfateAction(newSulfate));
    dispatch(updateOriginalChlorideAction(newChloride));
    dispatch(updateOriginalSodiumAction(newSodium));
    dispatch(updateOriginalPhAction(newPh));
  };

  return (
    <div className="waterSouceData">
      <div className="waterSouceData-modal sourceWaterDiluition">
        <div className="waterSouceData-modal-top">
          <h4 className="mt-2">Source Water Diluition</h4>
        </div>
        <div className="waterSouceData-salt">
          <div className="field">
            <div>Input Data</div>
            <div>
              <div></div>
            </div>
          </div>
          <div className="field">
            <div>Diluition Rate in % of distilled water</div>
            <div>
              <input
                type="number"
                placeholder="0.0"
                onChange={(e) => setDiluition(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <div>Output Data</div>
            <div>
              <div></div>
            </div>
          </div>
          <div className="field">
            <div>Calcium (ppm)</div>
            <div>
              <input
                type="number"
                placeholder={
                  !newCalcium ? `${calcium}` : `${newCalcium.toFixed(2)}`
                }
              />
            </div>
          </div>
          <div className="field">
            <div>Magnesium (ppm)</div>
            <div>
              <input
                type="number"
                placeholder={
                  !newMagnesium ? `${magnesium}` : `${newMagnesium.toFixed(2)}`
                }
              />
            </div>
          </div>
          <div className="field">
            <div>The Alkalinity is expressed as CaCO3</div>
            <div>
              <div></div>
            </div>
          </div>
          <div className="field">
            <div>Alkaliniy as CaCO3</div>
            <div>
              <input
                type="number"
                placeholder={
                  !newAlkalinity
                    ? `${alkalinity}`
                    : `${newAlkalinity.toFixed(2)}`
                }
              />
            </div>
          </div>
          <div className="field">
            <div>Sulfate (ppm)</div>
            <div>
              <input
                type="number"
                placeholder={
                  !newSulfate ? `${sulfate}` : `${newSulfate.toFixed(2)}`
                }
              />
            </div>
          </div>
          <div className="field">
            <div>Chloride (ppm)</div>
            <div>
              <input
                type="number"
                placeholder={
                  !newChloride ? `${chloride}` : `${newChloride.toFixed(2)}`
                }
              />
            </div>
          </div>
          <div className="field">
            <div>Sodium (ppm)</div>
            <div>
              <input
                type="number"
                placeholder={
                  !newSodium ? `${sodium}` : `${newSodium.toFixed(2)}`
                }
              />
            </div>
          </div>
          <div className="field">
            <div>Water pH</div>
            <div>
              <input
                type="number"
                placeholder={!newPh ? `${ph}` : `${newPh.toFixed(2)}`}
              />
            </div>
          </div>
          <div className="field button sourceWaterDiluition-button">
            <div>
              <button
                onClick={() => {
                  setModal("saltAdditions");
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

export default SourceWaterDiluition;
