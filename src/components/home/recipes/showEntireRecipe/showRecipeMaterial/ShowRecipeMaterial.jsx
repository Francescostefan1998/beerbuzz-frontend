import "./showRecipeMaterial.css";
import { BsDot } from "react-icons/bs";
const ShowRecipeMaterial = ({ body }) => {
  return (
    <>
      {body && Array.isArray(body.malts) && (
        <div className="showRecipeMaterial">
          <h2>Material</h2>
          <h4>Salts</h4>
          {body.salts.map((salt, i) => (
            <div key={salt.name}>
              <BsDot /> {salt.name}: {salt.amount}g
            </div>
          ))}
          <h4>Malts</h4>
          {body.malts.map((malt, i) => (
            <div key={malt.nameId}>
              <BsDot /> {malt.name}: {malt.amount}kg
            </div>
          ))}
          <h4>Hops</h4>
          {body.hops.map((malt, i) => (
            <div key={malt.nameId}>
              <BsDot /> {malt.name}: {malt.amount}kg
            </div>
          ))}
          <h4>Yeasts</h4>
          {body.yeasts.map((malt, i) => (
            <div key={malt.nameId}>
              <BsDot /> {malt.name}: {malt.amount}kg
            </div>
          ))}
          <h4>Others</h4>
          {body.others.map((malt, i) => (
            <div key={malt.name}>
              <BsDot /> {malt.name}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ShowRecipeMaterial;
