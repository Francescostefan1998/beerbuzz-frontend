import "./malts.css";
import NavbarIngredients from "../navbarIngredients/NavbarIngredients";
import { GiWheat } from "react-icons/gi";
import { HiSearch } from "react-icons/hi";
import { useState } from "react";
import CommonEngredientsModal from "../commonEngredientsModal/CommonEngredientsModal";
const Malts = () => {
  return (
    <div className="malts">
      <NavbarIngredients prew="/water" next="/hops" />
      <CommonEngredientsModal
        icon={<GiWheat className="icon" />}
        title={"Fermentable"}
        colorOrIbu={"Color (EBC)"}
        next={"/hops"}
        fetchProps={"malts"}
      />
    </div>
  );
};

export default Malts;
