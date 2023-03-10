import "../waterSourceData/waterSourceData.css";
import "./saltAdditions.css";
import { addSaltRecipeAction } from "../../../../../../redux/actions/recipe";
import { subtractSaltRecipeAction } from "../../../../../../redux/actions/recipe";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RiCloseLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import {
  updateOriginalAlkalinityAction,
  updateOriginalCalciumAction,
  updateOriginalMagnesiumAction,
  updateOriginalSulfateAction,
  updateOriginalChlorideAction,
  updateOriginalSodiumAction,
  updateOriginalPhAction,
} from "../../../../../../redux/actions/updatedWater";
const SaltAdditions = ({ setModal }) => {
  const dispatch = useDispatch();
  const { salts } = useSelector((state) => state.createRecipe);
  const { mashVolume } = useSelector((state) => state.waterAndBeerData);
  const verifyIfSelected = (title, value) => {
    switch (title) {
      case "gipsum":
        if (Array.isArray(salts) && salts.length > 0) {
          dispatch(subtractSaltRecipeAction({ name: title, quantity: value }));
          dispatch(addSaltRecipeAction({ name: title, quantity: value }));
        } else {
          dispatch(addSaltRecipeAction({ name: title, quantity: value }));
        }
        break;
      case "calciumChloride":
        if (Array.isArray(salts) && salts.length > 0) {
          dispatch(subtractSaltRecipeAction({ name: title, quantity: value }));
          dispatch(addSaltRecipeAction({ name: title, quantity: value }));
        } else {
          dispatch(addSaltRecipeAction({ name: title, quantity: value }));
        }
        break;
      case "epson":
        if (Array.isArray(salts) && salts.length > 0) {
          dispatch(subtractSaltRecipeAction({ name: title, quantity: value }));
          dispatch(addSaltRecipeAction({ name: title, quantity: value }));
        } else {
          dispatch(addSaltRecipeAction({ name: title, quantity: value }));
        }
        break;
      case "bakingSoda":
        if (Array.isArray(salts) && salts.length > 0) {
          dispatch(subtractSaltRecipeAction({ name: title, quantity: value }));
          dispatch(addSaltRecipeAction({ name: title, quantity: value }));
        } else {
          dispatch(addSaltRecipeAction({ name: title, quantity: value }));
        }
        break;
      case "canningSalt":
        if (Array.isArray(salts) && salts.length > 0) {
          dispatch(subtractSaltRecipeAction({ name: title, quantity: value }));
          dispatch(addSaltRecipeAction({ name: title, quantity: value }));
        } else {
          dispatch(addSaltRecipeAction({ name: title, quantity: value }));
        }
        break;
      default:
        setSelected([]);
    }
  };

  return (
    <div className="waterSouceData">
      <div className="waterSouceData-modal saltAdditions">
        <div className="waterSouceData-modal-top">
          <h4 className="mt-2">Salt Additions</h4>
          <div
            className="waterSouceData-close"
            onClick={() => setModal("closed")}
          >
            <RiCloseLine className="waterSouceData-close-icon" />
          </div>
        </div>
        <div className="waterSouceData-salt">
          <div className="field">
            <div>
              <b> Salt Additions (grams)</b>
            </div>
            <div></div>
          </div>
          <div className="field">
            <div>Gypsum CaSO4*2H2O</div>
            <div>
              <input
                type="number"
                placeholder={`${
                  salts.find((salt) => salt.name === "gypsum")?.quantity || 0
                }`}
                onChange={(e) => verifyIfSelected("gypsum", e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <div>Calcium Chloride CaCl2*2H2O</div>
            <div>
              <input
                type="number"
                placeholder={`${
                  salts.find((salt) => salt.name === "calciumChloride")
                    ?.quantity || 0
                }`}
                onChange={(e) =>
                  verifyIfSelected("calciumChloride", e.target.value)
                }
              />
            </div>
          </div>

          <div className="field">
            <div>Epson Salt MgSO4*7H2O</div>
            <div>
              <input
                type="number"
                placeholder={`${
                  salts.find((salt) => salt.name === "epson")?.quantity || 0
                }`}
                onChange={(e) => verifyIfSelected("epson", e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <div>Baking Soda NaHCO3</div>
            <div>
              <input
                type="number"
                placeholder={`${
                  salts.find((salt) => salt.name === "bakingSoda")?.quantity ||
                  0
                }`}
                onChange={(e) => verifyIfSelected("bakingSoda", e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <div>Canning Salt NaCl</div>
            <div>
              <input
                type="number"
                placeholder={`${
                  salts.find((salt) => salt.name === "canningSalt")?.quantity ||
                  0
                }`}
                onChange={(e) =>
                  verifyIfSelected("canningSalt", e.target.value)
                }
              />
            </div>
          </div>
          <div className="field">
            <div>
              {" "}
              <b>Salt Contributions (ppm)</b>
            </div>
            <div></div>
          </div>
          <div className="field">
            <div>Calcium (ppm)</div>
            <div>
              <input type="number" placeholder="0.0" />
            </div>
          </div>
          <div className="field">
            <div>Magnesium (ppm)</div>
            <div>
              <input type="number" placeholder="0.0" />
            </div>
          </div>

          <div className="field">
            <div>Sulfate (ppm)</div>
            <div>
              <input type="number" placeholder="0.0" />
            </div>
          </div>
          <div className="field">
            <div>Chloride (ppm)</div>
            <div>
              <input type="number" placeholder="0.0" />
            </div>
          </div>
          <div className="field">
            <div>Sodium (ppm)</div>
            <div>
              <input type="number" placeholder="0.0" />
            </div>
          </div>
          <div className="field">
            <div>Adjusted Residual Alkalinity as CaCO3</div>
            <div>
              <input type="number" placeholder="0.0" />
            </div>
          </div>
          <div className="field button saltAdditions-button">
            <div>
              <button onClick={() => setModal("acidAdditions")}>
                Confirm and Proceed
              </button>
            </div>
            <div>
              <button onClick={() => setModal("closed")}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaltAdditions;
