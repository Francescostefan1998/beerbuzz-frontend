import "./showRecipeSteps.css";

const ShowRecipeSteps = ({ body }) => {
  return (
    <>
      {body && Array.isArray(body.mash) && (
        <div className="showRecipeSteps">
          <h2>Steps</h2>
          <h4>Mash</h4>
          <div className="showRecipeSteps-single-step first">
            <div className="showRecipeSteps-single-step-cell">Name</div>{" "}
            <div className="showRecipeSteps-single-step-cell">
              Duration(min)
            </div>
            <div className="showRecipeSteps-single-step-cell">
              Temperature(C)
            </div>
            <div className="showRecipeSteps-single-step-cell description">
              Description
            </div>
          </div>

          {body.mash.map((salt, i) => (
            <div className="showRecipeSteps-single-step" key={salt.name}>
              {" "}
              <div className="showRecipeSteps-single-step-cell">
                {salt.name}
              </div>{" "}
              <div className="showRecipeSteps-single-step-cell">
                {salt.duration}
              </div>
              <div className="showRecipeSteps-single-step-cell">
                {salt.temperature}
              </div>
              <div className="showRecipeSteps-single-step-cell description">
                {salt.description}
              </div>
            </div>
          ))}
          <div className="showRecipeSteps-single-step last"></div>
          <h4>Boil</h4>
          <div className="showRecipeSteps-single-step first">
            <div className="showRecipeSteps-single-step-cell">Name</div>{" "}
            <div className="showRecipeSteps-single-step-cell">
              Duration(min)
            </div>
            <div className="showRecipeSteps-single-step-cell">
              Temperature(C)
            </div>
            <div className="showRecipeSteps-single-step-cell description">
              Description
            </div>
          </div>

          {body.boil.map((salt, i) => (
            <div className="showRecipeSteps-single-step" key={salt.name}>
              {" "}
              <div className="showRecipeSteps-single-step-cell">
                {salt.name}
              </div>{" "}
              <div className="showRecipeSteps-single-step-cell">
                {salt.duration}
              </div>
              <div className="showRecipeSteps-single-step-cell">
                {salt.temperature}
              </div>
              <div className="showRecipeSteps-single-step-cell description">
                {salt.description}
              </div>
            </div>
          ))}
          <div className="showRecipeSteps-single-step last"></div>

          <h4>Fermetation</h4>
          <div className="showRecipeSteps-single-step first">
            <div className="showRecipeSteps-single-step-cell">Name</div>{" "}
            <div className="showRecipeSteps-single-step-cell">
              Duration(min)
            </div>
            <div className="showRecipeSteps-single-step-cell">
              Temperature(C)
            </div>
            <div className="showRecipeSteps-single-step-cell description">
              Description
            </div>
          </div>

          {body.fermentation.map((salt, i) => (
            <div className="showRecipeSteps-single-step" key={salt.name}>
              {" "}
              <div className="showRecipeSteps-single-step-cell">
                {salt.name}
              </div>{" "}
              <div className="showRecipeSteps-single-step-cell">
                {salt.duration}
              </div>
              <div className="showRecipeSteps-single-step-cell">
                {salt.temperature}
              </div>
              <div className="showRecipeSteps-single-step-cell description">
                {salt.description}
              </div>
            </div>
          ))}
          <div className="showRecipeSteps-single-step last"></div>
        </div>
      )}
    </>
  );
};

export default ShowRecipeSteps;
