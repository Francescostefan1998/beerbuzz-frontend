import "../commonEngredientsModal/commonEngredientsModal.css";
import "./others.css";
import { useState } from "react";
import NavbarIngredients from "../navbarIngredients/NavbarIngredients";
import { BsTrashFill } from "react-icons/bs";
import { MdAddCircle } from "react-icons/md";
import AddOthers from "./addOthers/AddOthers";
import { useNavigate } from "react-router-dom";
const Others = () => {
  const [add, setAdd] = useState(false);
  const [engredients, setEngredients] = useState([
    {
      name: "new",
      description: "new",
    },
  ]);

  const navigate = useNavigate();
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
              <div
                key={engrediet.name}
                className="ingredients-others-single mt-4"
              >
                <div>
                  {" "}
                  <BsTrashFill className="ingredients-others-single-icon" />
                </div>

                <div className="ingredients-others-single-grow1">
                  {engrediet.name}
                </div>
                <div className="ingredients-others-single-grow1">
                  {" "}
                  {engrediet.description}
                </div>
                <div>
                  {" "}
                  <MdAddCircle
                    className="ingredients-others-single-icon"
                    onClick={() => setAdd(true)}
                  />
                </div>
              </div>
            ))}
            {add && <AddOthers />}
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
