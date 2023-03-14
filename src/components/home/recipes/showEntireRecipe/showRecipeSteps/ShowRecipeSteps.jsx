import "./showRecipeSteps.css";

const ShowRecipeSteps = ({ body }) => {
  return (
    <>
      {body && (
        <div className="showRecipeSteps">
          <h2>Material</h2>
          <h4>Salts</h4>
          {body.mash.map((salt, i) => (
            <div key={salt.name}>
              {salt.name}: {salt.duration}g
            </div>
          ))}
          <h4>Malts</h4>
          {body.malts.map((malt, i) => (
            <div key={malt.nameId}>
              {malt.nameId}: {malt.amount}kg
            </div>
          ))}
          <h4>Hops</h4>
          {body.hops.map((malt, i) => (
            <div key={malt.nameId}>
              {malt.nameId}: {malt.amount}kg
            </div>
          ))}
          <h4>Yeasts</h4>
          {body.yeasts.map((malt, i) => (
            <div key={malt.nameId}>
              {malt.nameId}: {malt.amount}kg
            </div>
          ))}
          <h4>Others</h4>
          {body.others.map((malt, i) => (
            <div key={malt.nameId}>{malt.nameId}</div>
          ))}
        </div>
      )}
    </>
  );
};

export default ShowRecipeSteps;
