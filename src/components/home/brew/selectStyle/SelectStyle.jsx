import "../../recipes/recipesList/recipesList.css";
import { useState } from "react";
import { useEffect } from "react";
import "./selectStyle.css";
import StyleSingleElement from "./styleSigleElement/StyleSingleElement";
import NavBar from "../../navBar/NavBar";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { addStyleAction } from "../../../../redux/actions/style";
import { useDispatch } from "react-redux";
import SideBarLeft from "../sideBarLeft/SideBarLeft";
const SelectStyle = () => {
  const [show, setShow] = useState(false);
  const [myBodyBeer, bodyToDispatch] = useState(null);
  const [allowSelection, setAllowSelection] = useState("m");
  const [beerList, setBeerList] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fetchAllStyles = async () => {
    const res = await fetch("http://localhost:3001/beers");
    const data = await res.json();
    await setBeerList(data);
  };

  useEffect(() => {
    fetchAllStyles();
  }, [allowSelection]);
  return (
    <>
      <div className="navbar-visible-in-small-screen">
        <NavBar />
        <div className="common-selection-bigger-container-search-bar visible-in-small-screen">
          <div className="recipesList-search">
            <BsSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search here the style of your beer"
            />
          </div>
        </div>
      </div>

      <div className="selectStyle">
        <div className="navbar-visible-in-big-screen">
          <NavBar />
        </div>
        <div className="selectStyle-sideBar-left">
          <SideBarLeft title={"Select Style"} subtitle={"r"} />
        </div>
        <div className="common-selection-bigger-container">
          <div className="common-selection-bigger-container-search-bar visible-in-big-screen">
            <div className="recipesList-search">
              <BsSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search here the style of your beer"
              />
            </div>
          </div>
          <div className="selectStyle-list">
            {beerList &&
              beerList.map((beer, i) => (
                <StyleSingleElement
                  propsShow={show}
                  setPropsShow={setShow}
                  key={beer._id}
                  body={beer}
                  setAllowSelection={setAllowSelection}
                  allowSelection={allowSelection}
                  bodyToDispatch={bodyToDispatch}
                />
              ))}
            {!beerList && (
              <StyleSingleElement propsShow={show} setPropsShow={setShow} />
            )}
          </div>
          <div className="selectStyle-list-proceed visible-in-big-screen">
            <div
              className="selectStyle-list-proceed-button"
              onClick={() => navigate("/brew")}
            >
              Back
            </div>
            <div
              className="selectStyle-list-proceed-button"
              onClick={() => {
                dispatch(addStyleAction(myBodyBeer));
                navigate("/water");
              }}
            >
              Save and Proceed
            </div>
          </div>
        </div>
      </div>
      <div className="selectStyle-list-proceed visible-in-small-screen">
        <div
          className="selectStyle-list-proceed-button"
          onClick={() => navigate("/brew")}
        >
          Back
        </div>
        <div
          className="selectStyle-list-proceed-button"
          onClick={() => {
            dispatch(addStyleAction(myBodyBeer));
            navigate("/water");
          }}
        >
          Save and Proceed
        </div>
      </div>
    </>
  );
};

export default SelectStyle;
