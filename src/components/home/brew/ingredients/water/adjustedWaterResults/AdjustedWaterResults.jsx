import "../waterSourceData/waterSourceData.css";
import "./adjustedWaterResults.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { RiCloseLine } from "react-icons/ri";
import { useState } from "react";
const AdjustedWaterResults = ({ setModal }) => {
  const { style } = useSelector((state) => state.style);
  const calcium1 = useSelector((store) => store.originalWater.calcium);
  const calcium2 = useSelector((store) => store.updatedWater.calcium);
  const calcium3 = useSelector((store) => store.afterSalt.calcium);
  const magnesium1 = useSelector((store) => store.originalWater.magnesium);
  const magnesium2 = useSelector((store) => store.updatedWater.magnesium);
  const magnesium3 = useSelector((store) => store.afterSalt.magnesium);
  const chloride1 = useSelector((store) => store.originalWater.chloride);
  const chloride2 = useSelector((store) => store.updatedWater.chloride);
  const chloride3 = useSelector((store) => store.afterSalt.chloride);
  const sodium1 = useSelector((store) => store.originalWater.sodium);
  const sodium2 = useSelector((store) => store.updatedWater.sodium);
  const sodium3 = useSelector((store) => store.afterSalt.sodium);
  const alkalinity1 = useSelector((store) => store.originalWater.alkalinity);
  const alkalinity2 = useSelector((store) => store.updatedWater.alkalinity);
  const alkalinity3 = useSelector((store) => store.afterSalt.alkalinity);
  const alkalinity4 = useSelector(
    (store) => store.afterSalt.alkalinityAfterAcid
  );
  const sulfalte1 = useSelector((store) => store.originalWater.sulfate);
  const sulfate2 = useSelector((store) => store.updatedWater.sulfate);
  const sulfate3 = useSelector((store) => store.afterSalt.sulfate);
  const ph1 = useSelector((store) => store.originalWater.ph);
  const ph2 = useSelector((store) => store.updatedWater.ph);
  const [totalSalt, setSum] = useState(0);
  useEffect(() => {
    const divs = document.querySelectorAll(".my-value");
    let sum = 0;
    divs.forEach((div) => {
      sum += parseInt(div.innerHTML);
    });
    setSum(sum);
  }, []);
  return (
    <div className="waterSouceData">
      <div className="waterSouceData-modal adjustedWaterResults">
        <div className="waterSouceData-modal-top">
          <h4 className="mt-2">Adjusted Water Results</h4>
        </div>
        <div className="waterSouceData-salt">
          <div className=" column">
            <div>
              <div>Final Calcium (ppm)</div>
              <div>
                <div className="my-value">
                  {calcium3 !== 0 && !isNaN(calcium3) && calcium3 !== "0.00"
                    ? parseFloat(calcium3).toFixed(2)
                    : calcium2 !== 0 && !isNaN(calcium2) && calcium2 !== "0.00"
                    ? parseFloat(calcium2).toFixed(2)
                    : parseFloat(calcium1).toFixed(2) && !isNaN(calcium1)
                    ? parseFloat(calcium1).toFixed(2)
                    : 0}
                </div>
              </div>
            </div>

            <div>
              <div>Suggested (ppm)</div>
              <div>
                {style && style.waterProfile.calcium[0]} -{" "}
                {style && style.waterProfile.calcium[1]}
              </div>
            </div>
          </div>
          <div className=" column">
            <div>
              <div>Final Magnesium (ppm)</div>
              <div>
                <div className="my-value">
                  {magnesium3 !== 0 &&
                  !isNaN(magnesium3) &&
                  magnesium3 !== "0.00"
                    ? parseFloat(magnesium3).toFixed(2)
                    : magnesium2 !== 0 &&
                      !isNaN(magnesium2) &&
                      magnesium2 !== "0.00"
                    ? parseFloat(magnesium2).toFixed(2)
                    : !isNaN(magnesium1)
                    ? parseFloat(magnesium1).toFixed(2)
                    : 0}
                </div>
              </div>
            </div>
            <div>
              <div>Suggested (ppm)</div>
              <div>
                {style && style.waterProfile.magnesium[0]} -{" "}
                {style && style.waterProfile.magnesium[1]}
              </div>
            </div>
          </div>
          <div className=" column">
            <div>
              <div>Final Alkalinity as CaCo3</div>
              <div>
                <div className="my-value">
                  {alkalinity4 !== 0 &&
                  !isNaN(alkalinity4) &&
                  alkalinity4 !== "0.00"
                    ? parseFloat(alkalinity4).toFixed(2)
                    : alkalinity3 !== 0 &&
                      !isNaN(alkalinity3) &&
                      alkalinity3 !== "0.00"
                    ? parseFloat(alkalinity3).toFixed(2)
                    : !isNaN(alkalinity2)
                    ? parseFloat(alkalinity2).toFixed(2)
                    : 0}
                </div>
              </div>
            </div>
            <div>
              <div>Suggested (ppm)</div>
              <div>
                {style && style.waterProfile.alkalinity[0]} -{" "}
                {style && style.waterProfile.alkalinity[1]}
              </div>
            </div>
          </div>

          <div className=" column">
            <div>
              <div>Final Sulfate (ppm)</div>
              <div>
                <div className="my-value">
                  {sulfate3 !== 0 && !isNaN(sulfate3) && sulfate3 !== "0.00"
                    ? parseFloat(sulfate3).toFixed(2)
                    : sulfate2 !== 0 && !isNaN(sulfate2) && sulfate2 !== "0.00"
                    ? parseFloat(sulfate2).toFixed(2)
                    : !isNaN(sulfalte1)
                    ? parseFloat(sulfalte1).toFixed(2)
                    : 0}
                </div>
              </div>
            </div>
            <div>
              <div>Suggested (ppm)</div>
              <div>
                {style && style.waterProfile.sulfate[0]} -{" "}
                {style && style.waterProfile.sulfate[1]}
              </div>
            </div>
          </div>
          <div className=" column">
            <div>
              <div>Final Chloride (ppm)</div>
              <div>
                <div className="my-value">
                  {chloride3 !== 0 && !isNaN(chloride3) && chloride3 !== "0.00"
                    ? parseFloat(chloride3).toFixed(2)
                    : chloride2 !== 0 &&
                      !isNaN(chloride2) &&
                      chloride2 !== "0.00"
                    ? parseFloat(chloride2).toFixed(2)
                    : !isNaN(chloride1)
                    ? parseFloat(chloride1).toFixed(2)
                    : 0}
                </div>
              </div>
            </div>
            <div>
              <div>Suggested (ppm)</div>
              <div>
                {style && style.waterProfile.chloride[0]} -{" "}
                {style && style.waterProfile.chloride[1]}
              </div>
            </div>
          </div>
          <div className=" column">
            <div>
              <div>Final Sodium (ppm)</div>
              <div>
                <div className="my-value">
                  {sodium3 !== 0 && !isNaN(sodium3) && sodium3 !== "0.00"
                    ? parseFloat(sodium3).toFixed(2)
                    : sodium2 !== 0 && !isNaN(sodium2) && sodium2 !== "0.00"
                    ? parseFloat(sodium2).toFixed(2)
                    : !isNaN(sodium1)
                    ? parseFloat(sodium1).toFixed(2)
                    : 0}
                </div>
              </div>
            </div>
            <div>
              <div>Suggested (ppm)</div>
              <div>
                {style && style.waterProfile.sodium[0]} -{" "}
                {style && style.waterProfile.sodium[1]}
              </div>
            </div>
          </div>
          <div className="field">
            <div>Total Dissolved Solids</div>
            <div>
              <div>{totalSalt}</div>
            </div>
          </div>
          <div className="field button adjustedWaterResults-button">
            <div>
              <button onClick={() => setModal("spargeWaterAcidification")}>
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

export default AdjustedWaterResults;
