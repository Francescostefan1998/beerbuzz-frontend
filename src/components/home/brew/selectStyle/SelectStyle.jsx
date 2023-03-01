import "../../recipes/recipesList/recipesList.css";
import { useState } from "react";

import "./selectStyle.css";
import StyleSingleElement from "./styleSigleElement/StyleSingleElement";
import NavBar from "../../navBar/NavBar";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const SelectStyle = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="selectStyle">
      <NavBar />
      <div className="recipesList-search">
        <BsSearch className="search-icon" />
        <input type="text" placeholder="Search here the style of your beer" />
      </div>
      <div className="selectStyle-list">
        <StyleSingleElement propsShow={show} setPropsShow={setShow} />
        <StyleSingleElement propsShow={show} setPropsShow={setShow} />
        <StyleSingleElement propsShow={show} setPropsShow={setShow} />
        <StyleSingleElement propsShow={show} setPropsShow={setShow} />
        <StyleSingleElement propsShow={show} setPropsShow={setShow} />
        <StyleSingleElement propsShow={show} setPropsShow={setShow} />
        <StyleSingleElement propsShow={show} setPropsShow={setShow} />
        <StyleSingleElement propsShow={show} setPropsShow={setShow} />
        <StyleSingleElement propsShow={show} setPropsShow={setShow} />
        <StyleSingleElement propsShow={show} setPropsShow={setShow} />
        <StyleSingleElement propsShow={show} setPropsShow={setShow} />
        <StyleSingleElement propsShow={show} setPropsShow={setShow} />
        <StyleSingleElement propsShow={show} setPropsShow={setShow} />
        <StyleSingleElement propsShow={show} setPropsShow={setShow} />
        <StyleSingleElement propsShow={show} setPropsShow={setShow} />
        <StyleSingleElement propsShow={show} setPropsShow={setShow} />
        <StyleSingleElement propsShow={show} setPropsShow={setShow} />
        <StyleSingleElement propsShow={show} setPropsShow={setShow} />
        <StyleSingleElement propsShow={show} setPropsShow={setShow} />
        <StyleSingleElement propsShow={show} setPropsShow={setShow} />
        <StyleSingleElement propsShow={show} setPropsShow={setShow} />
        <StyleSingleElement propsShow={show} setPropsShow={setShow} />
        <StyleSingleElement propsShow={show} setPropsShow={setShow} />
        <StyleSingleElement propsShow={show} setPropsShow={setShow} />
        <StyleSingleElement propsShow={show} setPropsShow={setShow} />
        <StyleSingleElement propsShow={show} setPropsShow={setShow} />
        <StyleSingleElement propsShow={show} setPropsShow={setShow} />
        <StyleSingleElement propsShow={show} setPropsShow={setShow} />
        <StyleSingleElement propsShow={show} setPropsShow={setShow} />
        <StyleSingleElement propsShow={show} setPropsShow={setShow} />
        <div className="selectStyle-list-proceed">
          <div
            className="selectStyle-list-proceed-button"
            onClick={() => navigate("/water")}
          >
            Proceed
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectStyle;
