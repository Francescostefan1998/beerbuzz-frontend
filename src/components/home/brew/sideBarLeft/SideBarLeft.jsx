import "./sideBarLeft.css";
import { useState } from "react";
import { useEffect } from "react";
import { FaListAlt } from "react-icons/fa";
import { IoMdBeer } from "react-icons/io";
import { MdOutlineWaterDrop } from "react-icons/md";
import { GiGrain } from "react-icons/gi";
import { GrSteps } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { BsBarChartSteps } from "react-icons/bs";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
const SideBarLeft = ({ title, subtitle, setStepFromTheSidebar }) => {
  const [water, setWater] = useState(false);
  const [material, setMaterial] = useState(false);
  const [style, setStyle] = useState(false);
  const [steps, setSteps] = useState(false);
  const [recipe, setRecipe] = useState(false);
  const navigate = useNavigate();
  const [selected, setSelected] = useState("");
  function handleClick(param) {
    if (typeof setStepFromTheSidebar === "function") {
      setStepFromTheSidebar(param);
    } else {
      navigate("/water");
    }
  }
  useEffect(() => {
    console.log(title);
    switch (title) {
      case "Recipes":
        setRecipe(true);
        break;
      case "Water":
        setWater(true);
        break;
      case "Ingredients":
        setMaterial(true);
        break;
      case "Steps":
        setSteps(true);
        break;
      case "Select Style":
        setStyle(true);
        break;
        defult: setSteps(false);
    }
  }, [title, water, material, style, steps, recipe, subtitle]);
  return (
    <div className="sideBarLeft">
      <div
        className="section"
        onClick={() => {
          recipe === false ? setRecipe(true) : setRecipe(false);
        }}
      >
        <div
          className={
            title === "Recipes"
              ? "sideBarLeft-littleBlock Colored"
              : "sideBarLeft-littleBlock notColored"
          }
        >
          <FaListAlt />
        </div>
        <div className={title === "Recipes" ? "selected" : "normal"}>
          Recipes
        </div>
        {!recipe && <RiArrowDropDownLine className="sideBarLeft-icon" />}
        {recipe && <RiArrowDropUpLine className="sideBarLeft-icon" />}
      </div>
      {recipe && (
        <div
          className="section ineerSection"
          onClick={() => navigate("/recipes")}
        >
          <div className="sideBarLeft-littleBlock"></div>

          <div
            className={
              subtitle === "r" && title === "Recipes" ? "selected" : "normal"
            }
          >
            My Recipe List
          </div>
        </div>
      )}
      {recipe && (
        <div
          className="section ineerSection"
          onClick={() => navigate("/recipeFavourite")}
        >
          <div className="sideBarLeft-littleBlock"></div>

          <div
            className={
              subtitle === "favourite" && title === "Recipes"
                ? "selected"
                : "normal"
            }
          >
            My Favourite
          </div>
        </div>
      )}
      <div
        className="section"
        onClick={() => {
          style === false ? setStyle(true) : setStyle(false);
        }}
      >
        <div
          className={
            title === "Select Style"
              ? "sideBarLeft-littleBlock Colored"
              : "sideBarLeft-littleBlock notColored"
          }
        >
          <IoMdBeer />
        </div>

        <div className={title === "Select Style" ? "selected" : "normal"}>
          Select Style
        </div>
        {!style && <RiArrowDropDownLine className="sideBarLeft-icon" />}
        {style && <RiArrowDropUpLine className="sideBarLeft-icon" />}
      </div>
      {style && (
        <div
          className="section ineerSection"
          onClick={() => navigate("/selectstyle")}
        >
          <div className="sideBarLeft-littleBlock"></div>

          <div className={title === "Select Style" ? "selected" : "normal"}>
            Beers
          </div>
        </div>
      )}
      <div
        className="section"
        onClick={() => {
          water === false ? setWater(true) : setWater(false);
        }}
      >
        <div
          className={
            title === "Water"
              ? "sideBarLeft-littleBlock Colored"
              : "sideBarLeft-littleBlock notColored"
          }
        >
          <MdOutlineWaterDrop />
        </div>

        <div className={title === "Water" ? "selected" : "normal"}>Water</div>
        {!water && <RiArrowDropDownLine className="sideBarLeft-icon" />}
        {water && <RiArrowDropUpLine className="sideBarLeft-icon" />}
      </div>
      {water && (
        <>
          <div
            className="section ineerSection"
            onClick={() => handleClick("waterSourceData")}
          >
            <div className="sideBarLeft-littleBlock"></div>

            <div
              className={subtitle === "waterSourceData" ? "selected" : "normal"}
            >
              Water Source
            </div>
          </div>
          <div
            className="section ineerSection"
            onClick={() => handleClick("residualAlkalinityTarger")}
          >
            <div className="sideBarLeft-littleBlock"></div>

            <div
              className={
                subtitle === "residualAlkalinityTarger" ? "selected" : "normal"
              }
            >
              Alkalinity Target
            </div>
          </div>
          <div
            className="section ineerSection"
            onClick={() => handleClick("souceWaterDiluition")}
          >
            <div className="sideBarLeft-littleBlock"></div>

            <div
              className={
                subtitle === "souceWaterDiluition" ? "selected" : "normal"
              }
            >
              Diluition
            </div>
          </div>
          <div
            className="section ineerSection"
            onClick={() => handleClick("saltAdditions")}
          >
            <div className="sideBarLeft-littleBlock"></div>

            <div
              className={subtitle === "saltAdditions" ? "selected" : "normal"}
            >
              Salt Addition
            </div>
          </div>
          <div
            className="section ineerSection"
            onClick={() => handleClick("acidAdditions")}
          >
            <div className="sideBarLeft-littleBlock"></div>

            <div
              className={subtitle === "acidAdditions" ? "selected" : "normal"}
            >
              Acid Addition
            </div>
          </div>
          <div
            className="section ineerSection"
            onClick={() => handleClick("adjustedWaterResults")}
          >
            <div className="sideBarLeft-littleBlock"></div>

            <div
              className={
                subtitle === "adjustedWaterResults" ? "selected" : "normal"
              }
            >
              Check Water Result
            </div>
          </div>
          <div
            className="section ineerSection"
            onClick={() => handleClick("spargeWaterAcidification")}
          >
            <div className="sideBarLeft-littleBlock"></div>

            <div
              className={
                subtitle === "spargeWaterAcidification" ? "selected" : "normal"
              }
            >
              Sparge Water
            </div>
          </div>
        </>
      )}
      <div
        className="section"
        onClick={() => {
          material === false ? setMaterial(true) : setMaterial(false);
        }}
      >
        <div
          className={
            title === "Ingredients"
              ? "sideBarLeft-littleBlock Colored"
              : "sideBarLeft-littleBlock notColored"
          }
        >
          <GiGrain />
        </div>

        <div className={title === "Ingredients" ? "selected" : "normal"}>
          Ingredients
        </div>
        {!material && <RiArrowDropDownLine className="sideBarLeft-icon" />}
        {material && <RiArrowDropUpLine className="sideBarLeft-icon" />}
      </div>
      {material && (
        <>
          <div
            className="section ineerSection"
            onClick={() => navigate("/malts")}
          >
            <div className="sideBarLeft-littleBlock"></div>

            <div
              className={subtitle === "Fermentables" ? "selected" : "normal"}
            >
              Fermentables
            </div>
          </div>
          <div
            className="section ineerSection"
            onClick={() => navigate("/hops")}
          >
            <div className="sideBarLeft-littleBlock"></div>

            <div className={subtitle === "Hops" ? "selected" : "normal"}>
              Hops
            </div>
          </div>
          <div
            className="section ineerSection"
            onClick={() => navigate("/yeasts")}
          >
            <div className="sideBarLeft-littleBlock"></div>

            <div className={subtitle === "Yeasts" ? "selected" : "normal"}>
              Yeasts and Bacteria
            </div>
          </div>
          <div
            className="section ineerSection"
            onClick={() => navigate("/others")}
          >
            <div className="sideBarLeft-littleBlock"></div>

            <div className={subtitle === "Others" ? "selected" : "normal"}>
              Others
            </div>
          </div>
        </>
      )}
      <div
        className="section"
        onClick={() => {
          steps === false ? setSteps(true) : setSteps(false);
        }}
      >
        <div
          className={
            title === "Steps"
              ? "sideBarLeft-littleBlock Colored"
              : "sideBarLeft-littleBlock notColored"
          }
        >
          <BsBarChartSteps />
        </div>

        <div className={title === "Steps" ? "selected" : "normal"}>Steps</div>
        {!steps && <RiArrowDropDownLine className="sideBarLeft-icon" />}
        {steps && <RiArrowDropUpLine className="sideBarLeft-icon" />}
      </div>
      {steps && (
        <>
          <div
            className="section ineerSection"
            onClick={() => navigate("/mash")}
          >
            <div className="sideBarLeft-littleBlock"></div>

            <div className={subtitle === "Mash" ? "selected" : "normal"}>
              Mash
            </div>
          </div>
          <div
            className="section ineerSection"
            onClick={() => navigate("/boil")}
          >
            <div className="sideBarLeft-littleBlock"></div>

            <div className={subtitle === "Boil" ? "selected" : "normal"}>
              Boil
            </div>
          </div>
          <div
            className="section ineerSection"
            onClick={() => navigate("/fermentation")}
          >
            <div className="sideBarLeft-littleBlock"></div>

            <div
              className={subtitle === "Fermentation" ? "selected" : "normal"}
            >
              Fermentation{" "}
            </div>
          </div>
          <div
            className="section ineerSection"
            onClick={() => navigate("/check")}
          >
            <div className="sideBarLeft-littleBlock"></div>

            <div
              className={subtitle === "Check Results" ? "selected" : "normal"}
            >
              Check Results
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SideBarLeft;
