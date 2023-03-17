import "../commonEngredientsModal/commonEngredientsModal.css";
import "./others.css";
import { useState } from "react";
import NavbarIngredients from "../navbarIngredients/NavbarIngredients";
import { HiSearch } from "react-icons/hi";
import AddOthers from "./addOthers/AddOthers";
import { MdAddCircle } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { addOtherRecipeAction } from "../../../../../redux/actions/ingredients.js";
import { subtractOtherRecipeAction } from "../../../../../redux/actions/ingredients.js";
import { addOthersRecipeAction } from "../../../../../redux/actions/recipe.js";
import { useDispatch } from "react-redux";
import { useStore } from "react-redux";
import { useSelector } from "react-redux";
import SingleOther from "./singleOther/SingleOther";
import { useEffect } from "react";
import NavBar from "../../../navBar/NavBar";
const Others = () => {
  const [add, setAddNew] = useState(false);
  const [refreshThisState, setRefreshThisState] = useState(false);
  const [engredients, setEngredients] = useState([
    {
      name: "example",
      description: "example",
    },
  ]);
  const [engredientsFetched, setEngredientsFetched] = useState([]);
  const { others } = useSelector((state) => state.recipeIngredient);
  const fetchProducts = async () => {
    const res = await fetch("http://localhost:3001/others");
    const data = await res.json();
    setEngredientsFetched(data);
  };
  const dispatch = useDispatch();
  const addRecipeAction = async (other) => {
    dispatch(addOtherRecipeAction(other));
  };
  const subtractRecipeAction = async (other) => {
    await dispatch(subtractOtherRecipeAction(other));
    await setRefreshDeleting();
    fetchProducts();
  };

  const navigate = useNavigate();
  const setAdd = async (param) => {
    await fetchProducts();
    await setAddNew(param);
  };
  const setRefreshDeleting = () => {
    if (refreshThisState) {
      setRefreshThisState(false);
    } else {
      setRefreshThisState(true);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, [add, refreshThisState]);
  return (
    <div className="others">
      <NavBar />
      {/*<NavbarIngredients prew="/yeasts" next="/mash" />*/}
      <div className="common-selection-bigger-container">
        <div className="common-ingredients-container-inside-section-top">
          <div className="common-ingredients-container-inside-title">
            <h2>Add a new Ingredients to your beer</h2>
          </div>
        </div>
        <div className="common-ingredients-container-inside-search-outerContainer invisible-in-small-screen">
          {" "}
          <div className="common-ingredients-container-inside-search">
            <div>
              <HiSearch />
            </div>
            <div className="common-ingredients-container-inside-search-input">
              <input type="text" placeholder="Search the product you need" />
            </div>
          </div>
          <div className="common-ingredients-container-inside-icons">
            <div
              className="malts-container-inside-section-bottom-add"
              onClick={() => {
                add !== false ? setAdd(false) : setAdd(true);
              }}
            ></div>
          </div>
        </div>
        <div className="common-ingredients-container-inside">
          <div className="common-ingredients-container-inside-section-middle">
            {engredientsFetched.length >= 1 ? (
              engredientsFetched.map((engredient, i) => (
                <SingleOther
                  engredient={engredient}
                  key={engredient._id}
                  setAdd={setAdd}
                  addRecipeAction={addRecipeAction}
                  subtractRecipeAction={subtractRecipeAction}
                  setRefreshDeleting={setRefreshDeleting}
                />
              ))
            ) : (
              <>
                <SingleOther engredient={engredients[0]} setAdd={setAdd} />
              </>
            )}
            {add && (
              <AddOthers addRecipeAction={addRecipeAction} setAdd={setAdd} />
            )}
            {!add && (
              <div className="ingredients-others-single-icon-circle">
                {" "}
                <MdAddCircle
                  className="ingredients-others-single-icon circle"
                  onClick={() => setAdd(true)}
                />
              </div>
            )}
          </div>
        </div>
        <div className="common-ingredients-container-inside-section-bottom">
          <div className="button" onClick={() => navigate("/yeasts")}>
            Back
          </div>
          <div
            className="button"
            onClick={() => {
              dispatch(addOthersRecipeAction(others));
              navigate("/mash");
            }}
          >
            Save and proceed
          </div>
        </div>
      </div>
    </div>
  );
};

export default Others;
