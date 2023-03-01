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
const Water = () => {
  const [step, setStep] = useState("");
  return (
    <div className="water">
      <NavbarIngredients prew="/selectstyle" next="/malts" />
      <div className="water-title mt-4 mb-3">
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
          <WaterSourceData setModal={setStep} />
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
            <div>Enter your target RA and the water volume to be adjusted</div>
          </div>
        </div>
        {step === "residualAlkalinityTarger" ? (
          <ResidualAlkalinity setModal={setStep} />
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
          <SourceWaterDiluition setModal={setStep} />
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
          <SaltAdditions setModal={setStep} />
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
          <AcidAdditions setModal={setStep} />
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
          <AdjustedWaterResults setModal={setStep} />
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
          <SpargeWaterAcidification setModal={setStep} />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Water;