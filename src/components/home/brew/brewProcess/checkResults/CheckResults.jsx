import "./checkResults.css";
import "../../selectStyle/selectStyle.css";

import "../fermentation/fermentationChart/fermentationChart.css";
import "../fermentation/fermentation.css";
import "../boil/boil.css";
import NavBar from "../../../navBar/NavBar";
import BrewProcessCommonTitle from "../brewProcessCommonComponent/brewProcessCommonTitle/brewProcessCommonTitle";
import ValueObtaining from "../brewProcessCommonComponent/valueObtaining/ValueObtaining";
import ValueSuggested from "../brewProcessCommonComponent/valueSuggested/ValueSuggested";
import CommonList from "../brewProcessCommonComponent/brewProcessCommonList/CommonList";
import CommonBrewStep from "../brewProcessCommonComponent/brewProcessCommonSteps/CommonBrewStep";
import { GiWheat } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import SideBarLeft from "../../sideBarLeft/SideBarLeft";

import FermentationChart from "../fermentation/fermentationChart/FermentationChart";
import { useEffect } from "react";
import { useState } from "react";
import { FaBacterium } from "react-icons/fa";
import { GiHops } from "react-icons/gi";
import { useSelector } from "react-redux";
import Comment from "../comments/Comment";
import MashWater from "../mashWater/MashWater";
const CheckResults = () => {
  const [refresh, setRefresh] = useState("refresh check page");
  const { others } = useSelector((state) => state.recipeIngredient);
  const { malts } = useSelector((state) => state.recipeIngredient);
  const { hops } = useSelector((state) => state.recipeIngredient);
  const { yeasts } = useSelector((state) => state.recipeIngredient);
  const nameRec = useSelector((state) => state.createRecipe.name);
  const imageRec = useSelector((state) => state.createRecipe.image);
  const authorRec = useSelector((state) => state.createRecipe.author);
  const userIdRec = localStorage.getItem("userId");
  const styleRec = useSelector((state) => state.style.name);
  const batchVolumeRec = useSelector((state) => state.createRecipe.batchVolume);
  const mashVolumeRec = useSelector(
    (state) => state.waterAndBeerData.mashVolume
  );
  const preBoilRec = useSelector((state) => state.waterAndBeerData.preBoil);
  const postBoilRec = useSelector((state) => state.waterAndBeerData.postBoil);
  const abvRec = useSelector((state) => state.createRecipe.abv);
  const ebcRec = useSelector((state) => state.createRecipe.ebc);
  const ibuRec = useSelector((state) => state.createRecipe.ibu);
  const ogRec = useSelector((state) => state.createRecipe.og);
  const fgRec = useSelector((state) => state.createRecipe.fg);
  const maltsRec = useSelector((state) => state.createRecipe.malts[0]);
  const hopsRec = useSelector((state) => state.createRecipe.hops[0]);
  const yeastsRec = useSelector((state) => state.createRecipe.yeasts[0]);
  const othersRec = useSelector((state) => state.createRecipe.others[0]);
  const saltsRec = useSelector((state) => state.createRecipe.salts);
  const mashRec = useSelector((state) => state.recipeSteps.mash);
  const boilRec = useSelector((state) => state.recipeSteps.boil);
  const commentsRec = useSelector((state) => state.createRecipe.comments);

  const fermentationRec = useSelector(
    (state) => state.recipeSteps.fermentation
  );

  const [recipe, setRecipe] = useState({
    name: "",
    image: "",
    author: "",
    userId: "",
    style: "",
    batchVolume: 0,
    mashVolume: 0,
    preBoil: 0,
    postBoil: 0,
    abv: 0,
    ebc: 0,
    ibu: 0,
    og: 0,
    fg: 0,
    malts: [],
    hops: [],
    yeasts: [],
    others: [],
    salts: [],
    mash: [
      {
        name: "",
        description: "",
        temperature: 0,
        duration: 0,
      },
    ],
    boil: [
      {
        name: "",
        description: "",
        temperature: 0,
        duration: 0,
      },
    ],
    fermentation: [
      {
        name: "",
        description: "",
        temperature: 0,
        duration: 0,
      },
    ],
    fermentationChart: [
      {
        day: 0,
        temperature: 0,
      },
    ],
    comments: [],
  });
  const navigate = useNavigate();

  const addProduct = async (body) => {
    await setRefresh(body.name);
  };
  const nonSenseFunction = (param) => {
    return;
  };
  const fillUpTheRecipeField = () => {
    const newRecipe = {
      ...recipe,
      name: nameRec,
      image: imageRec,
      author: authorRec.toString(),
      userId: userIdRec,
      style: styleRec,
      batchVolume: batchVolumeRec,
      mashVolume: mashVolumeRec,
      preBoil: preBoilRec,
      postBoil: postBoilRec,
      abv: abvRec,
      ebc: ebcRec,
      ibu: ibuRec,
      og: ogRec,
      fg: fgRec,
      malts:
        Array.isArray(maltsRec) &&
        maltsRec.map((malt) => ({
          name: malt.name,
          nameId: malt._id,
          amount: malt.quantity,
        })),
      hops:
        Array.isArray(hopsRec) &&
        hopsRec.map((hop) => ({
          name: hop.name,

          nameId: hop._id,
          amount: hop.quantity,
        })),
      yeasts:
        Array.isArray(yeastsRec) &&
        yeastsRec.map((yeast) => ({
          name: yeast.name,

          nameId: yeast._id,
          amount: yeast.quantity,
        })),
      others:
        Array.isArray(othersRec) &&
        othersRec.map((other) => ({
          name: other.name,

          nameId: other._id,
          amount: 0,
        })),
      salts:
        Array.isArray(saltsRec) &&
        saltsRec.map((salt) => ({
          name: salt.name,
          amount: salt.quantity,
        })),
      mash:
        Array.isArray(mashRec) &&
        mashRec.map((mash) => ({
          name: mash.name,
          description: mash.description,
          temperature: mash.temperature,
          duration: mash.duration,
        })),
      boil:
        Array.isArray(boilRec) &&
        boilRec.map((boil) => ({
          name: boil.name,
          description: boil.description,
          temperature: boil.temperature,
          duration: boil.duration,
        })),
      fermentation:
        Array.isArray(fermentationRec) &&
        fermentationRec.map((fermentation) => ({
          name: fermentation.name,
          description: fermentation.description,
          temperature: fermentation.temperature,
          duration: fermentation.duration,
        })),
      fermentationChart: Array.from({ length: boilRec.length }, () => ({
        day: 0,
        temperature: 0,
      })),
      comments:
        Array.isArray(commentsRec) &&
        commentsRec.map((comment) => ({
          name: comment.name,
          comment: comment.comment,
        })),
    };
    setRecipe(newRecipe);
    console.log(newRecipe);
  };
  const postANewRecipe = async (entireRecipe) => {
    const res = await fetch("http://localhost:3001/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entireRecipe),
    });
    const data = await res.json();
  };
  useEffect(() => {
    setRefresh("refresh check page");
    fillUpTheRecipeField(recipe);
  }, []);

  return (
    <>
      <div className="navbar-visible-in-small-screen">
        <NavBar />
      </div>
      <div className="mash">
        <div className="navbar-visible-in-big-screen">
          <NavBar />
        </div>
        <div className="selectStyle-sideBar-left">
          <SideBarLeft title={"Select Style"} />
        </div>

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
            <div className="check-main-section-products">
              <h1>Malts</h1>
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
              <h1>Mash </h1>
              <CommonBrewStep
                addStepRecipeAction={nonSenseFunction}
                subtractStepRecipeAction={nonSenseFunction}
                refresh={"refresh check page"}
                title={"Mash"}
              />
            </div>
          </div>
          <div className="boil-main-section">
            <div className="check-main-section-products">
              <h1>Hops</h1>
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
              <h1>Boil</h1>
              <CommonBrewStep
                addStepRecipeAction={nonSenseFunction}
                subtractStepRecipeAction={nonSenseFunction}
                refresh={"refresh check page"}
                title={"Boil"}
              />
            </div>
          </div>

          <div className="fermentation-main-section">
            <div className="check-main-section-products">
              <h1>Yeasts And Bacteria</h1>
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
              <h1>Fermentation</h1>
              <CommonBrewStep
                addStepRecipeAction={nonSenseFunction}
                subtractStepRecipeAction={nonSenseFunction}
                refresh={"refresh check page"}
                title={"Fermentation"}
              />
            </div>
          </div>
          <FermentationChart />
          <Comment />
        </div>
        <div className="checkResults-bottom-section visible-in-big-screen">
          <div
            className="checkResults-bottom-section-button"
            onClick={() => navigate("/fermentation")}
          >
            Back
          </div>
          <div
            className="checkResults-bottom-section-button"
            onClick={() => {
              postANewRecipe(recipe);
              navigate("/home");
            }}
          >
            Save Recipe!!
          </div>
        </div>
      </div>
      <div className="checkResults-bottom-section visible-in-small-screen">
        <div
          className="checkResults-bottom-section-button"
          onClick={() => navigate("/fermentation")}
        >
          Back
        </div>
        <div
          className="checkResults-bottom-section-button"
          onClick={() => {
            postANewRecipe(recipe);
            navigate("/home");
          }}
        >
          Save Recipe!!
        </div>
      </div>
    </>
  );
};

export default CheckResults;
