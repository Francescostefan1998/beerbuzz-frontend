import "./ingredients.css";
import { useNavigate } from "react-router-dom";
import NavBar from "../../navBar/NavBar";
import { IoWater } from "react-icons/io5";
import { FaBacterium } from "react-icons/fa";
import { GiHops } from "react-icons/gi";
import { GiWheat } from "react-icons/gi";
import { HiDotsHorizontal } from "react-icons/hi";
import { useState } from "react";
const Ingredients = () => {
  const navigate = useNavigate();
  const [water, setWater] = useState(false);
  const [malts, setMalts] = useState(false);
  const [hops, setHops] = useState(false);
  const [yeasts, setYeasts] = useState(false);
  const [others, setOthers] = useState(false);

  const handleClick = async (param, link) => {
    param(true);

    setTimeout(() => {
      navigate(link);
    }, 800);
  };

  return (
    <div className="ingredients">
      <NavBar />
      <div className="mt-3">
        <h1>Select an Ingredients to proceed with your recipe!</h1>
      </div>
      <div
        onClick={(e) => handleClick(setWater, "/water")}
        className="ingredients-sections"
      >
        <div
          className="icon water-ing"
          id={water && "igredient-selected-bigger"}
        >
          <IoWater />
        </div>
        <div className="text ">Water</div>
      </div>
      <div
        onClick={(e) => handleClick(setMalts, "/malts")}
        className="ingredients-sections"
      >
        {" "}
        <div
          className="icon malts-ing"
          id={malts && "igredient-selected-bigger"}
        >
          <GiWheat />
        </div>
        <div className="text">Malts</div>
      </div>
      <div
        onClick={(e) => handleClick(setHops, "/hops")}
        className="ingredients-sections"
      >
        {" "}
        <div className="icon hops-ing" id={hops && "igredient-selected-bigger"}>
          <GiHops />
        </div>
        <div className="text">Hops</div>
      </div>
      <div
        onClick={(e) => handleClick(setYeasts, "/yeasts")}
        className="ingredients-sections"
      >
        {" "}
        <div
          className="icon yeasts-ing"
          id={yeasts && "igredient-selected-bigger"}
        >
          <FaBacterium />
        </div>
        <div className="text">Yeasts and Bacteria</div>
      </div>
      <div
        onClick={(e) => handleClick(setOthers, "/others")}
        className="ingredients-sections"
      >
        {" "}
        <div
          className="icon others-ing"
          id={others && "igredient-selected-bigger"}
        >
          <HiDotsHorizontal />
        </div>
        <div className="text">Others</div>
      </div>
    </div>
  );
};

export default Ingredients;
