import React from "react";
import "./beerLogo.css";
import { useNavigate } from "react-router-dom";
import { CiBeerMugFull } from "react-icons/ci";

const BeerLogo = () => {
  const navigate = useNavigate();
  return (
    <div className="beer-logo" onClick={() => navigate("/home")}>
      <CiBeerMugFull />
    </div>
  );
};

export default BeerLogo;
