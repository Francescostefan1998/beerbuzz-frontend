import "../recipesList/recipesList.css";
import "./singleRecipe.css";
import { CiBeerMugFull } from "react-icons/ci";
import { BsPencilFill } from "react-icons/bs";
import { useState } from "react";
const SingleRecipe = ({ body, setRecipe }) => {
  const [image, setImage] = useState("");

  return (
    <div className="recipesList-recipe" onClick={(e) => setRecipe(body._id)}>
      <div className="recipesList-recipe-image">
        {body.image !== "" ? (
          <img src={body.image} alt="mybeer" />
        ) : (
          <CiBeerMugFull className="recipesList-recipe-image-icon" />
        )}
      </div>
      <div className="recipesList-recipe-data">
        <div className="title">
          <span>
            {body.name !== "" ? (
              <strong>{body.name} </strong>
            ) : (
              <strong>Name of the beer </strong>
            )}
          </span>{" "}
          {body.author !== "" ? (
            <span className="author">{body.author} </span>
          ) : (
            <span className="author">BeerBuzz</span>
          )}
        </div>

        <div className="style">
          {body.style && body.style}
          {!body.style && "Indian Pale Ale"}
        </div>

        <div className="details">
          {body.abv !== "" ? (
            <div>
              <strong>ABV:</strong> {body.abv}%,
            </div>
          ) : (
            <div>
              <strong>ABV:</strong> 5.00%,
            </div>
          )}
          {body.ibu !== "" ? (
            <div>
              <strong>IBU:</strong> {body.ibu},
            </div>
          ) : (
            <div>
              <strong>IBU:</strong> 50,
            </div>
          )}
          {body.og !== "" ? (
            <div>
              <strong>OG:</strong> {body.og},
            </div>
          ) : (
            <div>
              <strong>OG:</strong> 1.050,
            </div>
          )}
          {body.fg !== "" ? (
            <div>
              <strong>FG:</strong> {body.fg},
            </div>
          ) : (
            <div>
              <strong>FG:</strong> 1.006,
            </div>
          )}
        </div>
      </div>
      <div className="recipesList-recipe-date mb-4">
        <div className="recipesList-recipe-date-date">
          {body.updatedAt.slice(0, 10)}
        </div>
        <div className="recipesList-recipe-date-edit">
          <BsPencilFill />
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe;
