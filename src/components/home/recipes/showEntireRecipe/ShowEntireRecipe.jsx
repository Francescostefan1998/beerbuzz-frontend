import React from "react";

import "./showEntireRecipe.css";
import { useEffect } from "react";
import { useState } from "react";
import ShowRecipeData from "./showRecipeData/ShowRecipeData";
import ShowRecipeMaterial from "./showRecipeMaterial/ShowRecipeMaterial";
import ShowRecipeSteps from "./showRecipeSteps/ShowRecipeSteps";
import { MdAddCircle } from "react-icons/md";
import { BsTrashFill } from "react-icons/bs";
import { FaSave } from "react-icons/fa";
import ShowFermentationChartCheck from "./showRecipeChart/ShowFermentationChartCheck";
import ShowRecipeTitle from "./showRecipeTitle/ShowRecipeTitle";
const ShowEntireRecipe = ({ setRecipe, recipeId }) => {
  const url = process.env.REACT_APP_BE_URL;

  const [body, setBody] = useState(null);
  const [comment, setNewComment] = useState({
    name: "",
    comment: "",
  });
  const [add, setAdd] = useState(false);
  const userIdRec = localStorage.getItem("userId");
  const fetchSingleRecipe = async (userId) => {
    const res = await fetch(`${url}/recipes/${userId}/${recipeId}`);
    const data = await res.json();
    setBody(data);
  };
  const fetchNewComment = async () => {
    const res = await fetch(`${url}/recipes/${recipeId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...body,
        comments: [...body.comments, comment],
      }),
    });
    const data = await res.json();
    setBody(data);
    setNewComment({
      name: "",
      comment: "",
    });
  };
  useEffect(() => {
    fetchSingleRecipe(userIdRec);
  }, [recipeId]);
  return (
    <div className="showEntireRecipe">
      <div className="showEntireRecipe-top">
        {" "}
        <div className="showEntireRecipe-top-left">
          {" "}
          <ShowRecipeTitle body={body} />
        </div>
        <div className="showEntireRecipe-top-right">
          <ShowRecipeData body={body} />
        </div>
      </div>
      <div className="showEntireRecipe-middle">
        <div className="showEntireRecipe-middle-left">
          <ShowRecipeMaterial body={body} />
        </div>
        <div className="showEntireRecipe-middle-right">
          <ShowRecipeSteps body={body} />
        </div>
      </div>
      <ShowFermentationChartCheck body={body} />
      <div className="showEntireRecipe-bottom">
        <h4>Comments</h4>
        {body &&
          Array.isArray(body.comments) &&
          body.comments.map((comment, i) => (
            <div key={comment.name}>
              {comment.name}: {comment.comment}
            </div>
          ))}
        {!add && (
          <div className="ingredients-others-single-icon-circle showEntireRecipe mt-2">
            {" "}
            <MdAddCircle
              className="ingredients-others-single-icon circle"
              onClick={() => setAdd(true)}
            />
          </div>
        )}
        {add && (
          <div className="showEntireRecipe-comments mt-2">
            <div className="ingredients-others-single-icon-circle showEntireRecipe">
              {" "}
              <BsTrashFill
                className="ingredients-others-single-icon circle"
                onClick={() => setAdd(false)}
              />
            </div>
            <div className="ingredients-others-single-grow1">
              <div>Name</div>
              <input
                type="text"
                placeholder="Name of the product"
                onChange={(e) =>
                  setNewComment({ ...comment, name: e.target.value })
                }
              />
            </div>
            <div className="ingredients-others-single-grow1">
              <div>Description</div>

              <input
                placeholder="description"
                onChange={(e) =>
                  setNewComment({ ...comment, comment: e.target.value })
                }
              ></input>
            </div>
            <div className="ingredients-others-single-icon-circle showEntireRecipe">
              {" "}
              <FaSave
                className="ingredients-others-single-icon circle"
                onClick={() => {
                  fetchNewComment();
                  setAdd(false);
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowEntireRecipe;
