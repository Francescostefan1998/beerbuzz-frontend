import "./waterSourceData.css";
import { RiCloseLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { addOriginalAlkalinityAction } from "../../../../../../redux/actions/originalWater";
import { addOriginalCalciumAction } from "../../../../../../redux/actions/originalWater";
import { addOriginalMagnesiumAction } from "../../../../../../redux/actions/originalWater";
import { addOriginalSulfateAction } from "../../../../../../redux/actions/originalWater";
import { addOriginalChlorideAction } from "../../../../../../redux/actions/originalWater";
import { addOriginalSodiumAction } from "../../../../../../redux/actions/originalWater";
import { addOriginalPhAction } from "../../../../../../redux/actions/originalWater";
import { useSelector } from "react-redux";
const WaterSourceData = ({ setModal }) => {
  const dispatch = useDispatch();
  const { calcium } = useSelector((state) => state.originalWater);
  const { magnesium } = useSelector((state) => state.originalWater);
  const { alkalinity } = useSelector((state) => state.originalWater);
  const { chloride } = useSelector((state) => state.originalWater);
  const { sulfate } = useSelector((state) => state.originalWater);
  const { sodium } = useSelector((state) => state.originalWater);
  const { ph } = useSelector((state) => state.originalWater);

  return (
    <div className="waterSouceData">
      <div className="waterSouceData-modal">
        <div className="waterSouceData-modal-top">
          <h4 className="mt-2">Souce Water Data</h4>
        </div>
        <div className="waterSouceData-salt">
          <div className="field">
            <div>Calcium (ppm)</div>
            <div>
              <input
                type="number"
                placeholder={calcium ? `${calcium}` : "0.0"}
                onChange={(e) =>
                  dispatch(addOriginalCalciumAction(e.target.value))
                }
              />
            </div>
          </div>
          <div className="field">
            <div>Magnesium (ppm)</div>
            <div>
              <input
                type="number"
                placeholder={magnesium ? `${magnesium}` : "0.0"}
                onChange={(e) =>
                  dispatch(addOriginalMagnesiumAction(e.target.value))
                }
              />
            </div>
          </div>
          <div className="field">
            <div>The Alkalinity is expressed in CaCO3</div>
            <div></div>
          </div>
          <div className="field">
            <div>Alkaliniy as CaCO3</div>
            <div>
              <input
                type="number"
                placeholder={alkalinity ? `${alkalinity}` : "0.0"}
                onChange={(e) =>
                  dispatch(addOriginalAlkalinityAction(e.target.value))
                }
              />
            </div>
          </div>
          <div className="field">
            <div>Sulfate (ppm)</div>
            <div>
              <input
                type="number"
                placeholder={sulfate ? `${sulfate}` : "0.0"}
                onChange={(e) =>
                  dispatch(addOriginalSulfateAction(e.target.value))
                }
              />
            </div>
          </div>
          <div className="field">
            <div>Chloride (ppm)</div>
            <div>
              <input
                type="number"
                placeholder={chloride ? `${chloride}` : "0.0"}
                onChange={(e) =>
                  dispatch(addOriginalChlorideAction(e.target.value))
                }
              />
            </div>
          </div>
          <div className="field">
            <div>Sodium (ppm)</div>
            <div>
              <input
                type="number"
                placeholder={sodium ? `${sodium}` : "0.0"}
                onChange={(e) =>
                  dispatch(addOriginalSodiumAction(e.target.value))
                }
              />
            </div>
          </div>
          <div className="field">
            <div>Water pH</div>
            <div>
              <input
                type="number"
                placeholder={ph ? `${ph}` : "0.0"}
                onChange={(e) => dispatch(addOriginalPhAction(e.target.value))}
              />
            </div>
          </div>
          <div className="field button">
            <div>
              <button onClick={() => setModal("residualAlkalinityTarger")}>
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

export default WaterSourceData;
