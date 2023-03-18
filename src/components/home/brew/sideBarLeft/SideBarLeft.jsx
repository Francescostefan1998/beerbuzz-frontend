import "./sideBarLeft.css";
import { useState } from "react";
import { useEffect } from "react";
import { FaListAlt } from "react-icons/fa";
import { IoMdBeer } from "react-icons/io";
import { MdOutlineWaterDrop } from "react-icons/md";
import { GiGrain } from "react-icons/gi";
import { GrSteps } from "react-icons/gr";
import { BsBarChartSteps } from "react-icons/bs";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
const SideBarLeft = ({ title }) => {
  const [water, setWater] = useState(false);
  const [material, setMaterial] = useState(false);
  const [style, setStyle] = useState(false);
  const [steps, setSteps] = useState(false);
  const [recipe, setRecipe] = useState(false);

  const [selected, setSelected] = useState("");

  useEffect(() => {}, [title, water, material, style, steps, recipe]);
  return (
    <div className="sideBarLeft">
      <div
        className="section"
        onClick={() => {
          recipe === false ? setRecipe(true) : setRecipe(false);
        }}
      >
        <div className="sideBarLeft-littleBlock">
          <FaListAlt />
        </div>
        <div
          className={
            title === document.querySelector("div").innerText
              ? "selected"
              : "normal"
          }
        >
          Recipes
        </div>
        {!recipe && <RiArrowDropDownLine className="sideBarLeft-icon" />}
        {recipe && <RiArrowDropUpLine className="sideBarLeft-icon" />}
      </div>
      {recipe && (
        <div className="section ineerSection">
          <div className="sideBarLeft-littleBlock"></div>

          <div
            className={
              title === document.querySelector("div").innerText
                ? "selected"
                : "normal"
            }
          >
            My Recipe List
          </div>
        </div>
      )}
      <div
        className="section"
        onClick={() => {
          style === false ? setStyle(true) : setStyle(false);
        }}
      >
        <div className="sideBarLeft-littleBlock">
          <IoMdBeer />
        </div>

        <div
          className={
            title === document.querySelector("div").innerText
              ? "selected"
              : "normal"
          }
        >
          Select Style
        </div>
        {!style && <RiArrowDropDownLine className="sideBarLeft-icon" />}
        {style && <RiArrowDropUpLine className="sideBarLeft-icon" />}
      </div>
      {style && (
        <div className="section ineerSection">
          <div className="sideBarLeft-littleBlock"></div>

          <div
            className={
              title === document.querySelector("div").innerText
                ? "selected"
                : "normal"
            }
          >
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
        <div className="sideBarLeft-littleBlock">
          <MdOutlineWaterDrop />
        </div>

        <div
          className={
            title === document.querySelector("div").innerText
              ? "selected"
              : "normal"
          }
        >
          Water
        </div>
        {!water && <RiArrowDropDownLine className="sideBarLeft-icon" />}
        {water && <RiArrowDropUpLine className="sideBarLeft-icon" />}
      </div>
      {water && (
        <>
          <div className="section ineerSection">
            <div className="sideBarLeft-littleBlock"></div>

            <div
              className={
                title === document.querySelector("div").innerText
                  ? "selected"
                  : "normal"
              }
            >
              Water Source
            </div>
          </div>
          <div className="section ineerSection">
            <div className="sideBarLeft-littleBlock"></div>

            <div
              className={
                title === document.querySelector("div").innerText
                  ? "selected"
                  : "normal"
              }
            >
              Alkalinity Target
            </div>
          </div>
          <div className="section ineerSection">
            <div className="sideBarLeft-littleBlock"></div>

            <div
              className={
                title === document.querySelector("div").innerText
                  ? "selected"
                  : "normal"
              }
            >
              Salt Addition
            </div>
          </div>
          <div className="section ineerSection">
            <div className="sideBarLeft-littleBlock"></div>

            <div
              className={
                title === document.querySelector("div").innerText
                  ? "selected"
                  : "normal"
              }
            >
              Acid Addition
            </div>
          </div>
          <div className="section ineerSection">
            <div className="sideBarLeft-littleBlock"></div>

            <div
              className={
                title === document.querySelector("div").innerText
                  ? "selected"
                  : "normal"
              }
            >
              Check Water Result
            </div>
          </div>
          <div className="section ineerSection">
            <div className="sideBarLeft-littleBlock"></div>

            <div
              className={
                title === document.querySelector("div").innerText
                  ? "selected"
                  : "normal"
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
        <div className="sideBarLeft-littleBlock">
          <GiGrain />
        </div>

        <div
          className={
            title === document.querySelector("div").innerText
              ? "selected"
              : "normal"
          }
        >
          Ingredients
        </div>
        {!material && <RiArrowDropDownLine className="sideBarLeft-icon" />}
        {material && <RiArrowDropUpLine className="sideBarLeft-icon" />}
      </div>
      {material && (
        <>
          <div className="section ineerSection">
            <div className="sideBarLeft-littleBlock"></div>

            <div
              className={
                title === document.querySelector("div").innerText
                  ? "selected"
                  : "normal"
              }
            >
              Fermentables
            </div>
          </div>
          <div className="section ineerSection">
            <div className="sideBarLeft-littleBlock"></div>

            <div
              className={
                title === document.querySelector("div").innerText
                  ? "selected"
                  : "normal"
              }
            >
              Hops
            </div>
          </div>
          <div className="section ineerSection">
            <div className="sideBarLeft-littleBlock"></div>

            <div
              className={
                title === document.querySelector("div").innerText
                  ? "selected"
                  : "normal"
              }
            >
              Yeasts and Bacteria
            </div>
          </div>
          <div className="section ineerSection">
            <div className="sideBarLeft-littleBlock"></div>

            <div
              className={
                title === document.querySelector("div").innerText
                  ? "selected"
                  : "normal"
              }
            >
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
        <div className="sideBarLeft-littleBlock">
          <BsBarChartSteps />
        </div>

        <div
          className={
            title === document.querySelector("div").innerText
              ? "selected"
              : "normal"
          }
        >
          Steps
        </div>
        {!steps && <RiArrowDropDownLine className="sideBarLeft-icon" />}
        {steps && <RiArrowDropUpLine className="sideBarLeft-icon" />}
      </div>
      {steps && (
        <>
          <div className="section ineerSection">
            <div className="sideBarLeft-littleBlock"></div>

            <div
              className={
                title === document.querySelector("div").innerText
                  ? "selected"
                  : "normal"
              }
            >
              Mash
            </div>
          </div>
          <div className="section ineerSection">
            <div className="sideBarLeft-littleBlock"></div>

            <div
              className={
                title === document.querySelector("div").innerText
                  ? "selected"
                  : "normal"
              }
            >
              Boil
            </div>
          </div>
          <div className="section ineerSection">
            <div className="sideBarLeft-littleBlock"></div>

            <div
              className={
                title === document.querySelector("div").innerText
                  ? "selected"
                  : "normal"
              }
            >
              Fermentation{" "}
            </div>
          </div>
          <div className="section ineerSection">
            <div className="sideBarLeft-littleBlock"></div>

            <div
              className={
                title === document.querySelector("div").innerText
                  ? "selected"
                  : "normal"
              }
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
