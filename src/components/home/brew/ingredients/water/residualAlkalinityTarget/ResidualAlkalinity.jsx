import "../waterSourceData/waterSourceData.css";
import "./residualAlkalinity.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import {
  updateMashVolumeWaterAndBeerAction,
  updateAlkalinityTargetWaterAndBeerAction,
  updateAlkalinityToBeReducedWaterAndBeerAction,
} from "../../../../../../redux/actions/waterAndBeerAction";
const ResidualAlkalinity = ({ setModal }) => {
  const { alkalinityTarget } = useSelector((state) => state.waterAndBeerData);
  const { alkalinity } = useSelector((state) => state.originalWater);

  const { mashVolume } = useSelector((state) => state.waterAndBeerData);
  const { alkalinityToBeReduced } = useSelector(
    (state) => state.waterAndBeerData
  );
  const dispatch = useDispatch();
  const [alkTarget, setAlkTarget] = useState(null);
  const [alkToBeReduced, setAlkToBeReduced] = useState(null);
  const [newMashVolume, setMashVolume] = useState(null);

  return (
    <div className="waterSouceData">
      <div className="waterSouceData-modal residualAlkalinity">
        <div className="waterSouceData-modal-top">
          <h4 className="mt-2">Residual Alkalinity To Be Reduced</h4>
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
              <input
                type="number"
                placeholder={alkTarget ? `${alkTarget}` : `${alkalinityTarget}`}
                onChange={(e) => {
                  dispatch(
                    updateAlkalinityTargetWaterAndBeerAction(e.target.value)
                  );
                  dispatch(
                    updateAlkalinityToBeReducedWaterAndBeerAction(
                      alkTarget - alkalinity
                    )
                  );
                  setAlkToBeReduced(e.target.value - alkalinity);

                  setAlkTarget(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="field">
            <div>Mash Water Volume</div>
            <div>
              <input
                type="number"
                placeholder={
                  newMashVolume ? `${newMashVolume}` : `${mashVolume}`
                }
                onChange={(e) => {
                  dispatch(updateMashVolumeWaterAndBeerAction(e.target.value));
                  dispatch(
                    updateAlkalinityToBeReducedWaterAndBeerAction(
                      alkTarget - alkalinity
                    )
                  );
                  setMashVolume(e.target.value);
                }}
              />
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
              <input
                type="number"
                placeholder={
                  alkToBeReduced
                    ? `${alkToBeReduced}`
                    : `${alkalinityToBeReduced}`
                }
              />
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
