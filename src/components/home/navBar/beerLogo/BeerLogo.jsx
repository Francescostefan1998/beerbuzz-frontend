import React from "react";
import "./beerLogo.css";
import { useNavigate } from "react-router-dom";
import { CiBeerMugFull } from "react-icons/ci";
import Progettosenzatitolo from "./Progettosenzatitolo.png";
const BeerLogo = () => {
  const navigate = useNavigate();
  return (
    <div className="beer-logo" onClick={() => navigate("/home")}>
      <img src={Progettosenzatitolo} alt="" />
    </div>
  );
};

export default BeerLogo;
