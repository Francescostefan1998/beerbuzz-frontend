import "./showRecipeTitle.css";

const ShowRecipeTitle = ({ body }) => {
  return (
    <>
      {body && (
        <div className="showRecipeTitle">
          <div>
            <h2>{body.name}</h2>
          </div>
          <div className="showRecipeTitle-image">
            <img src={body.image} alt="recipeImage" />
          </div>

          <div>
            <h3>{body.author}</h3>
          </div>
        </div>
      )}
    </>
  );
};

export default ShowRecipeTitle;
