import "../waterSourceData/waterSourceData.css";
import "./saltAdditions.css";
import { addSaltRecipeAction } from "../../../../../../redux/actions/recipe";
import { subtractSaltRecipeAction } from "../../../../../../redux/actions/recipe";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RiCloseLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  afterSaltOriginalAlkalinityAction,
  afterSaltOriginalCalciumAction,
  afterSaltOriginalMagnesiumAction,
  afterSaltOriginalSulfateAction,
  afterSaltOriginalChlorideAction,
  afterSaltOriginalSodiumAction,
} from "../../../../../../redux/actions/afterSalt";
const SaltAdditions = ({ setModal }) => {
  const dispatch = useDispatch();
  const { salts } = useSelector((state) => state.createRecipe);
  const { calcium } = useSelector((state) => state.updatedWater);
  const { magnesium } = useSelector((state) => state.updatedWater);
  const { chloride } = useSelector((state) => state.updatedWater);
  const { alkalinity } = useSelector((state) => state.updatedWater);
  const { sulfate } = useSelector((state) => state.updatedWater);
  const { sodium } = useSelector((state) => state.updatedWater);

  const { mashVolume } = useSelector((state) => state.waterAndBeerData);
  const [CaGypsum, setCaGy] = useState(0);
  const [so4Gypsum, setSo4Gy] = useState(0);

  const [CaCalciumCloride, setCaCl] = useState(0);
  const [ClCalciumCloride, setClCa] = useState(0);
  const [mgEpson, setMgEpson] = useState(0);
  const [so4Epson, setSo4Epson] = useState(0);
  const [naSoda, setNaSoda] = useState(0);
  const [alkSoda, setAlkSoda] = useState(0);
  const [NaSalt, setNaSalt] = useState(0);
  const [ClSalt, setClSalt] = useState(0);
  useEffect(() => {
    console.log(CaGypsum);
  }, [
    CaGypsum,
    so4Gypsum,
    CaCalciumCloride,
    ClCalciumCloride,
    mgEpson,
    so4Epson,
    naSoda,
    alkSoda,
    NaSalt,
    ClSalt,
  ]);
  const verifyIfSelected = (title, value) => {
    switch (title) {
      case "gypsum":
        if (Array.isArray(salts) && salts.length > 0) {
          dispatch(subtractSaltRecipeAction({ name: title, quantity: value }));
          dispatch(addSaltRecipeAction({ name: title, quantity: value }));
          setCaGy(((value * 0.257) / mashVolume) * 1000);
          setSo4Gy(((value * 0.58) / mashVolume) * 1000);
        } else {
          dispatch(addSaltRecipeAction({ name: title, quantity: value }));
        }
        break;
      case "calciumChloride":
        if (Array.isArray(salts) && salts.length > 0) {
          dispatch(subtractSaltRecipeAction({ name: title, quantity: value }));
          dispatch(addSaltRecipeAction({ name: title, quantity: value }));

          setCaCl(((value * 0.273) / mashVolume) * 1000);
          setClCa(((value * 0.48) / mashVolume) * 1000);
        } else {
          dispatch(addSaltRecipeAction({ name: title, quantity: value }));
        }
        break;
      case "epson":
        if (Array.isArray(salts) && salts.length > 0) {
          dispatch(subtractSaltRecipeAction({ name: title, quantity: value }));
          dispatch(addSaltRecipeAction({ name: title, quantity: value }));
          setMgEpson(((value * 0.1) / mashVolume) * 1000);
          setSo4Epson(((value * 0.39) / mashVolume) * 1000);
        } else {
          dispatch(addSaltRecipeAction({ name: title, quantity: value }));
        }
        break;
      case "bakingSoda":
        if (Array.isArray(salts) && salts.length > 0) {
          dispatch(subtractSaltRecipeAction({ name: title, quantity: value }));
          dispatch(addSaltRecipeAction({ name: title, quantity: value }));
          setNaSoda(((value * 0.27) / mashVolume) * 1000);
          setAlkSoda((value * 2.5 * 50) / mashVolume);
        } else {
          dispatch(addSaltRecipeAction({ name: title, quantity: value }));
        }
        break;
      case "canningSalt":
        if (Array.isArray(salts) && salts.length > 0) {
          dispatch(subtractSaltRecipeAction({ name: title, quantity: value }));
          dispatch(addSaltRecipeAction({ name: title, quantity: value }));
          setNaSalt(((value * 0.39) / mashVolume) * 1000);
          setClSalt(((value * 0.61) / mashVolume) * 1000);
        } else {
          dispatch(addSaltRecipeAction({ name: title, quantity: value }));
        }
        break;
      default:
    }
    dispatchCorrection();
  };

  const dispatchCorrection = async () => {
    dispatch(
      afterSaltOriginalAlkalinityAction(
        (parseFloat(alkalinity) + parseFloat(alkSoda)).toFixed(2)
      )
    );
    dispatch(
      afterSaltOriginalCalciumAction(
        (
          parseFloat(CaCalciumCloride) +
          parseFloat(CaGypsum) +
          parseFloat(calcium)
        ).toFixed(2)
      )
    );
    console.log(CaCalciumCloride, CaGypsum, calcium);

    dispatch(
      afterSaltOriginalMagnesiumAction(
        (parseFloat(magnesium) + parseFloat(mgEpson)).toFixed(2)
      )
    );
    dispatch(
      afterSaltOriginalSulfateAction(
        (
          parseFloat(sulfate) +
          parseFloat(so4Epson) +
          parseFloat(so4Gypsum)
        ).toFixed(2)
      )
    );
    dispatch(
      afterSaltOriginalChlorideAction(
        (
          parseFloat(ClCalciumCloride) +
          parseFloat(ClSalt) +
          parseFloat(chloride)
        ).toFixed(2)
      )
    );
    dispatch(
      afterSaltOriginalSodiumAction(
        (parseFloat(naSoda) + parseFloat(NaSalt) + parseFloat(sodium)).toFixed(
          2
        )
      )
    );
  };

  return (
    <div className="waterSouceData">
      <div className="waterSouceData-modal saltAdditions">
        <div className="waterSouceData-modal-top">
          <h4 className="mt-2">Salt Additions</h4>
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
              <div>
                {!isNaN(CaCalciumCloride + CaGypsum)
                  ? (CaCalciumCloride + CaGypsum).toFixed(2)
                  : 0}
              </div>
            </div>
          </div>
          <div className="field">
            <div>Magnesium (ppm)</div>
            <div>
              <div>{!isNaN(mgEpson) ? mgEpson.toFixed(2) : 0}</div>
            </div>
          </div>

          <div className="field">
            <div>Sulfate (ppm)</div>
            <div>
              <div>
                {!isNaN(so4Epson + so4Gypsum)
                  ? (so4Epson + so4Gypsum).toFixed(2)
                  : 0}
              </div>
            </div>
          </div>
          <div className="field">
            <div>Chloride (ppm)</div>
            <div>
              <div>
                {!isNaN(ClCalciumCloride + ClSalt)
                  ? (ClCalciumCloride + ClSalt).toFixed(2)
                  : 0}
              </div>
            </div>
          </div>
          <div className="field">
            <div>Sodium (ppm)</div>
            <div>
              <div>
                {!isNaN(naSoda + NaSalt) ? (naSoda + NaSalt).toFixed(2) : 0}
              </div>
            </div>
          </div>
          <div className="field mb-4">
            <div>Adjusted Residual Alkalinity as CaCO3</div>
            <div>
              <div>{!isNaN(alkSoda) ? alkSoda.toFixed(2) : 0}</div>
            </div>
          </div>
          <div className="field button saltAdditions-button">
            <div>
              <button
                onClick={() => {
                  dispatchCorrection();
                }}
              >
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
