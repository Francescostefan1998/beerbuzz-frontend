import "./water.css";
import NavbarIngredients from "../navbarIngredients/NavbarIngredients";
import WaterSourceData from "./waterSourceData/WaterSourceData";
import AcidAdditions from "./acidAdditions/AcidAdditions";
import AdjustedWaterResults from "./adjustedWaterResults/AdjustedWaterResults";
import ResidualAlkalinity from "./residualAlkalinityTarget/ResidualAlkalinity";
import SaltAdditions from "./saltAdditions/SaltAdditions";
import SourceWaterDiluition from "./sourceWaterDiluition/SourceWaterDiluition";
import SpargeWaterAcidification from "./spargeWaterAcidification/SpargeWaterAcidification";
import { useState } from "react";
import { IoWaterOutline } from "react-icons/io5";
import { FiTarget } from "react-icons/fi";
import { IoIosWater } from "react-icons/io";
import { TbSalt } from "react-icons/tb";
import { GiAcid, GiChemicalDrop } from "react-icons/gi";
import { FaEquals } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import NavBar from "../../../navBar/NavBar";
import BottomBar from "../../../../bottomBar/BottomBar";
import { useEffect } from "react";
const Water = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState("water");
  const [myZindex, setZindexPriority] = useState("");
  const [proceed, setProceed] = useState("waterSourceData");
  const [back, setBack] = useState("");
  const setBackAndForth = (step) => {
    switch (step) {
      case "waterSourceData":
        setProceed("residualAlkalinityTarger");
        setBack("water");
        break;
      case "residualAlkalinityTarger":
        setProceed("souceWaterDiluition");
        setBack("waterSourceData");

        break;
      case "souceWaterDiluition":
        setProceed("saltAdditions");
        setBack("residualAlkalinityTarger");

        break;
      case "saltAdditions":
        setProceed("acidAdditions");
        setBack("souceWaterDiluition");

        break;
      case "acidAdditions":
        setProceed("adjustedWaterResults");
        setBack("saltAdditions");

        break;
      case "adjustedWaterResults":
        setProceed("spargeWaterAcidification");
        setBack("acidAdditions");

        break;
      case "spargeWaterAcidification":
        setProceed("");
        setBack("adjustedWaterResults");

        break;
      default:
    }
  };

  useEffect(() => {
    console.log("water");
    setBackAndForth(step);
  }, [step, myZindex]);
  return (
    <div className="water">
      <NavBar />
      <div className="common-selection-bigger-container">
        <div className="water-title" style={{ zIndex: `${myZindex}` }}>
          <h2>Water</h2>
        </div>
        <div className="water-list">
          <div
            className="water-list-element"
            onClick={() => setStep("waterSourceData")}
          >
            <div>
              <IoWaterOutline className="icon" />
            </div>
            <div className="water-list-element-tile">
              <div>
                <h5>Step 1: Source Water Data</h5>
              </div>
              <div>Enter Source Water Profile </div>
            </div>
          </div>
          {step === "waterSourceData" ? (
            <WaterSourceData
              setModal={setStep}
              setProceed={setProceed}
              setBack={setBack}
            />
          ) : (
            <div></div>
          )}
          <div
            className="water-list-element"
            onClick={() => setStep("residualAlkalinityTarger")}
          >
            <div>
              <FiTarget className="icon" />
            </div>
            <div className="water-list-element-tile">
              <div>
                <h5>Step 2: Residual Alkalinity Target</h5>
              </div>
              <div>
                Enter your target RA and the water volume to be adjusted
              </div>
            </div>
          </div>
          {step === "residualAlkalinityTarger" ? (
            <ResidualAlkalinity
              setModal={setStep}
              setProceed={setProceed}
              setBack={setBack}
            />
          ) : (
            <div></div>
          )}
          <div
            className="water-list-element"
            onClick={() => setStep("souceWaterDiluition")}
          >
            <div>
              <IoIosWater className="icon" />
            </div>
            <div className="water-list-element-tile">
              <div>
                <h5>Step 3: Source Water Diluition</h5>
              </div>
              <div>Diluite source water with distilled water</div>
            </div>
          </div>
          {step === "souceWaterDiluition" ? (
            <SourceWaterDiluition
              setModal={setStep}
              setProceed={setProceed}
              setBack={setBack}
            />
          ) : (
            <div></div>
          )}
          <div
            className="water-list-element"
            onClick={() => setStep("saltAdditions")}
          >
            <div>
              <TbSalt className="icon" />
            </div>
            <div className="water-list-element-tile">
              <div>
                <h5>Step 4: Salt Additions</h5>
              </div>
              <div>Add various salt to boots ion levels</div>
            </div>
          </div>
          {step === "saltAdditions" ? (
            <SaltAdditions
              setModal={setStep}
              setProceed={setProceed}
              setBack={setBack}
            />
          ) : (
            <div></div>
          )}
          <div
            className="water-list-element"
            onClick={() => setStep("acidAdditions")}
          >
            <div>
              <GiAcid className="icon" />
            </div>
            <div className="water-list-element-tile">
              <div>
                <h5>Step 5: Acid Additions</h5>
              </div>
              <div>Suggested Acid Additions to help reach your RA target</div>
            </div>
          </div>
          {step === "acidAdditions" ? (
            <AcidAdditions
              setModal={setStep}
              setProceed={setProceed}
              setBack={setBack}
              setZindexPriority={setZindexPriority}
            />
          ) : (
            <div></div>
          )}
          <div
            className="water-list-element"
            onClick={() => setStep("adjustedWaterResults")}
          >
            <div>
              <FaEquals className="icon" />
            </div>
            <div className="water-list-element-tile">
              <div>
                <h5>Step 6: Adjusted Water Results</h5>
              </div>
              <div>
                Compare your results with the suggested ranges for the style
              </div>
            </div>
          </div>
          {step === "adjustedWaterResults" ? (
            <AdjustedWaterResults
              setModal={setStep}
              setProceed={setProceed}
              setBack={setBack}
            />
          ) : (
            <div></div>
          )}
          <div
            className="water-list-element"
            onClick={() => setStep("spargeWaterAcidification")}
          >
            <div>
              <GiChemicalDrop className="icon" />
            </div>
            <div className="water-list-element-tile">
              <div>
                <h5>Step 7: Sparge Water Acidification</h5>
              </div>
              <div>
                Optional: if sparge water is being treated separately from mash
                water
              </div>
            </div>
          </div>
          {step === "spargeWaterAcidification" ? (
            <SpargeWaterAcidification
              setModal={setStep}
              setProceed={setProceed}
              setBack={setBack}
              setZindexPriority={setZindexPriority}
            />
          ) : (
            <div></div>
          )}
        </div>
        <BottomBar
          proceedWater={proceed}
          backWater={back}
          setStepWater={setStep}
          style={{ zIndex: `${myZindex}` }}
        />
      </div>
    </div>
  );
};

export default Water;
