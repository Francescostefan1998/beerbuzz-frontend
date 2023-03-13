import "./checkResults.css";
import "../fermentation/fermentationChart/fermentationChart.css";
import "../fermentation/fermentation.css";
import "../boil/boil.css";
import NavBar from "../../../navBar/NavBar";
import NavbarIngredients from "../../ingredients/navbarIngredients/NavbarIngredients";
import BrewProcessCommonTitle from "../brewProcessCommonComponent/brewProcessCommonTitle/brewProcessCommonTitle";
import ValueObtaining from "../brewProcessCommonComponent/valueObtaining/ValueObtaining";
import ValueSuggested from "../brewProcessCommonComponent/valueSuggested/ValueSuggested";
import CommonList from "../brewProcessCommonComponent/brewProcessCommonList/CommonList";
import CommonBrewStep from "../brewProcessCommonComponent/brewProcessCommonSteps/CommonBrewStep";
import { GiWheat } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import FermentationChart from "../fermentation/fermentationChart/FermentationChart";
import { useEffect } from "react";
import { useState } from "react";
import { FaBacterium } from "react-icons/fa";
import { GiHops } from "react-icons/gi";
import { useSelector } from "react-redux";
import Comment from "../comments/Comment";
import MashWater from "../mashWater/MashWater";
const CheckResults = () => {
  const [refresh, setRefresh] = useState("");
  const { others } = useSelector((state) => state.recipeIngredient);
  const { malts } = useSelector((state) => state.recipeIngredient);
  const { hops } = useSelector((state) => state.recipeIngredient);
  const { yeasts } = useSelector((state) => state.recipeIngredient);

  const navigate = useNavigate();

  const addProduct = async (body) => {
    await setRefresh(body.name);
  };
  const nonSenseFunction = (param) => {
    return;
  };
  useEffect(() => {
    setRefresh("refresh check page");
  }, []);

  return (
    <div className="checkResults">
      <NavBar />
      <div className="checkResults-overflow-scroll">
        <div className="checkResults-top-section">
          <div className="checkResults-top-section-left">
            <BrewProcessCommonTitle select={"checkResults"} />
          </div>
          <div className="checkResults-top-section-right">
            <div className="checkResults-top-section-right-container1">
              {" "}
              <ValueObtaining />
            </div>
            <div className="checkResults-top-section-right-container">
              <ValueSuggested />
            </div>
          </div>
        </div>
        <MashWater setRefresh={setRefresh} />

        <div className="checkResults-main-section">
          <div>
            <h1>
              Mash
              <button onClick={(e) => navigate("/mash")}>
                GO TO MASH PAGE
              </button>
            </h1>
            <CommonList
              icon={<GiWheat />}
              colorOrIbu={"Color (EBC)"}
              title={"Mash"}
              colorOff={"false"}
              refresh={"refresh check page"}
              addProduct={addProduct}
              addThisProduct={addProduct}
              subtractProduct={nonSenseFunction}
            />
          </div>
          <div className="checkResults-main-section-process">
            <h1>
              Mash Process{" "}
              <button onClick={(e) => navigate("/mash")}>
                GO TO MASH PAGE
              </button>
            </h1>
            <CommonBrewStep
              addStepRecipeAction={nonSenseFunction}
              subtractStepRecipeAction={nonSenseFunction}
              refresh={refresh}
              title={"Mash"}
            />
          </div>
        </div>
        <div className="boil-main-section">
          <div>
            <h1>
              Boil
              <button onClick={(e) => navigate("/boil")}>
                GO TO BOIL PAGE
              </button>
            </h1>
            <CommonList
              icon={<GiHops />}
              colorOrIbu={"Alpha Acid (%)"}
              title={"Hops"}
              colorOff={"false"}
              refresh={"refresh check page"}
              addProduct={addProduct}
              addThisProduct={addProduct}
              subtractProduct={nonSenseFunction}
            />
          </div>

          <div className="boil-main-section-process">
            <h1>
              Boil Process
              <button onClick={(e) => navigate("/boil")}>
                GO TO BOIL PAGE
              </button>
            </h1>
            <CommonBrewStep
              addStepRecipeAction={nonSenseFunction}
              subtractStepRecipeAction={nonSenseFunction}
              refresh={refresh}
              title={"Boil"}
            />
          </div>
        </div>

        <div className="fermentation-main-section">
          <div>
            <h1>
              Fermentation
              <button onClick={(e) => navigate("/fermentation")}>
                GO TO FERMENTATION PAGE
              </button>
            </h1>
            <CommonList
              icon={<FaBacterium />}
              colorOrIbu={"Attenuation (%)"}
              title={"Yeasts and Bacteria"}
              colorOff={"false"}
              refresh={"refresh check page"}
              addThisProduct={addProduct}
              addProduct={addProduct}
              subtractProduct={nonSenseFunction}
            />
          </div>
          <div className="fermentation-main-section-process">
            <h1>
              Fermentation Process
              <button onClick={(e) => navigate("/fermentation")}>
                GO TO FERMENTATION PAGE
              </button>
            </h1>
            <CommonBrewStep
              addStepRecipeAction={nonSenseFunction}
              subtractStepRecipeAction={nonSenseFunction}
              refresh={refresh}
              title={"Fermentation"}
            />
          </div>
        </div>
        <FermentationChart />
        <Comment />
        <div className="checkResults-bottom-section">
          <div
            className="checkResults-bottom-section-button"
            onClick={() => navigate("/fermentation")}
          >
            Back
          </div>
          <div
            className="checkResults-bottom-section-button"
            onClick={() => navigate("/home")}
          >
            Save Recipe!!
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckResults;
