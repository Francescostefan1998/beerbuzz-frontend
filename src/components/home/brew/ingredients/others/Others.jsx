import "../commonEngredientsModal/commonEngredientsModal.css";
import "./others.css";
import { useState } from "react";
import NavbarIngredients from "../navbarIngredients/NavbarIngredients";

const Others = () => {
  const [engredients, setEngredients] = useState([
    {
      name: "new",
      description: "new",
    },
  ]);
  return (
    <div className="ingredients">
      <NavbarIngredients prew="/yeasts" next="/recipes" />
      <div className="common-ingredients-container">
        <div className="common-ingredients-container-inside">
          <div className="common-ingredients-container-inside-section-top">
            <div className="common-ingredients-container-inside-title">
              Add a new Ingredients to your beer
            </div>
          </div>
          <div className="common-ingredients-container-inside-section-middle">
            {engredients.map((engrediet, i) => (
              <div key={engrediet.name} className="ingredients-others-single">
                <div> cancel</div>

                <div> {engrediet.name}</div>
                <div> {engrediet.description}</div>
                <div> plus</div>
              </div>
            ))}
          </div>
          <div className="common-ingredients-container-inside-section-bottom">
            <div className="malts-container-inside-section-bottom-add">
              <div>Skip and proceed</div>
            </div>
            <div>Save and proceed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Others;
