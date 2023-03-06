import "../commonEngredientsModal/commonEngredientsModal.css";
import "./others.css";
import { useState } from "react";
import NavbarIngredients from "../navbarIngredients/NavbarIngredients";

import AddOthers from "./addOthers/AddOthers";
import { useNavigate } from "react-router-dom";
import { addOtherRecipeAction } from "../../../../../redux/actions/ingredients.js";
import { subtractOtherRecipeAction } from "../../../../../redux/actions/ingredients.js";
import { useDispatch } from "react-redux";
import { useStore } from "react-redux";
import { useSelector } from "react-redux";
import { addOthersRecipeAction } from "../../../../../redux/actions/recipe";
import SingleOther from "./singleOther/SingleOther";
import { useEffect } from "react";
const Others = () => {
  const [add, setAdd] = useState(false);
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
    dispatch(subtractOtherRecipeAction(other));
  };

  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="others">
      <NavbarIngredients prew="/yeasts" next="/recipes" />
      <div className="common-ingredients-container">
        <div className="common-ingredients-container-inside">
          <div className="common-ingredients-container-inside-section-top">
            <div className="common-ingredients-container-inside-title">
              Add a new Ingredients to your beer
            </div>
          </div>
          <div className="common-ingredients-container-inside-section-middle">
            {engredientsFetched.length >= 1 ? (
              engredientsFetched.map((engredient, i) => (
                <SingleOther
                  engredient={engredient}
                  key={engredient._id}
                  setAdd={setAdd}
                  addRecipeAction={addRecipeAction}
                  subtractRecipeAction={subtractRecipeAction}
                />
              ))
            ) : (
              <SingleOther engredient={engredients[0]} setAdd={setAdd} />
            )}
            {add && <AddOthers addRecipeAction={addRecipeAction} />}
          </div>
          <div className="common-ingredients-container-inside-section-bottom">
            <div
              className="malts-container-inside-section-bottom-add"
              onClick={() => navigate("/mash")}
            >
              <div>Skip and proceed</div>
            </div>
            <div onClick={() => navigate("/mash")}>Save and proceed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Others;
