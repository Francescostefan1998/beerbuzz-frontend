import "./valueObtaining.css";
import { useState } from "react";
import { FaPen } from "react-icons/fa";
import { BsCheckLg } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import {
  addBatchVolumeRecipeAction,
  addAbvRecipeAction,
  addEbcbRecipeAction,
  addIbuRecipeAction,
  addOgRecipeAction,
  addFgRecipeAction,
} from "../../../../../../redux/actions/recipe";
import { useDispatch } from "react-redux";
const ValueObtaining = ({ refresh }) => {
  const [editVolume, setEditVolume] = useState(false);
  const [editABV, setEditABV] = useState(false);
  const [editOG, setEditOG] = useState(false);
  const [editFG, setEditFG] = useState(false);
  const [editIBU, setEditIBU] = useState(false);
  const [editEBC, setEditEBC] = useState(false);
  const { og } = useSelector((state) => state.createRecipe);
  const { fg } = useSelector((state) => state.createRecipe);
  const { ibu } = useSelector((state) => state.createRecipe);
  const { ebc } = useSelector((state) => state.createRecipe);
  const { abv } = useSelector((state) => state.createRecipe);
  const { batchVolume } = useSelector((state) => state.createRecipe);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("refresh value");
  }, [refresh]);
  return (
    <div className="valueObtaining">
      <div className="valueObtaining-section">
        <div className="valueObtaining-section-title">Batch Volume:</div>
        {editVolume && (
          <div className="valueObtaining-section-input">
            <div>
              <input
                type="number"
                placeholder="value"
                onChange={(e) =>
                  dispatch(addBatchVolumeRecipeAction(e.target.value))
                }
              />
            </div>
            <BsCheckLg onClick={() => setEditVolume(false)} className="icon" />
          </div>
        )}
        {!editVolume && (
          <div className="valueObtaining-section-input">
            <div>{parseFloat(batchVolume).toFixed(2)} L</div>{" "}
            <FaPen onClick={() => setEditVolume(true)} className="icon" />
          </div>
        )}
      </div>
      <div className="valueObtaining-section">
        <div className="valueObtaining-section-title">ABV:</div>
        {editABV && (
          <div className="valueObtaining-section-input">
            <div>
              <input
                type="number"
                placeholder="value"
                onChange={(e) => dispatch(addAbvRecipeAction(e.target.value))}
              />
            </div>
            <BsCheckLg onClick={() => setEditABV(false)} className="icon" />
          </div>
        )}
        {!editABV && (
          <div className="valueObtaining-section-input">
            <div>{parseFloat(abv).toFixed(2)} </div>{" "}
            <FaPen onClick={() => setEditABV(true)} className="icon" />
          </div>
        )}
      </div>
      <div className="valueObtaining-section">
        <div className="valueObtaining-section-title">EBC:</div>
        {editEBC && (
          <div className="valueObtaining-section-input">
            <div>
              <input
                type="number"
                placeholder="value"
                onChange={(e) => dispatch(addEbcbRecipeAction(e.target.value))}
              />
            </div>
            <BsCheckLg onClick={() => setEditEBC(false)} className="icon" />
          </div>
        )}
        {!editEBC && (
          <div className="valueObtaining-section-input">
            <div>{parseFloat(ebc).toFixed(2)} </div>{" "}
            <FaPen onClick={() => setEditEBC(true)} className="icon" />
          </div>
        )}
      </div>
      <div className="valueObtaining-section">
        <div className="valueObtaining-section-title">IBU:</div>
        {editIBU && (
          <div className="valueObtaining-section-input">
            <div>
              <input
                type="number"
                placeholder="value"
                onChange={(e) => dispatch(addIbuRecipeAction(e.target.value))}
              />
            </div>
            <BsCheckLg onClick={() => setEditIBU(false)} className="icon" />
          </div>
        )}
        {!editIBU && (
          <div className="valueObtaining-section-input">
            <div>{parseFloat(ibu).toFixed(2)} </div>{" "}
            <FaPen onClick={() => setEditIBU(true)} className="icon" />
          </div>
        )}
      </div>
      <div className="valueObtaining-section">
        <div className="valueObtaining-section-title">OG:</div>
        {editOG && (
          <div className="valueObtaining-section-input">
            <div>
              <input
                type="number"
                placeholder="value"
                onChange={(e) => dispatch(addOgRecipeAction(e.target.value))}
              />
            </div>
            <BsCheckLg onClick={() => setEditOG(false)} className="icon" />
          </div>
        )}
        {!editOG && (
          <div className="valueObtaining-section-input">
            <div>{parseFloat(og).toFixed(3)}</div>{" "}
            <FaPen onClick={() => setEditOG(true)} className="icon" />
          </div>
        )}
      </div>
      <div className="valueObtaining-section">
        <div className="valueObtaining-section-title">FG:</div>
        {editFG && (
          <div className="valueObtaining-section-input">
            <div>
              <input
                type="number"
                placeholder="value"
                onChange={(e) => dispatch(addFgRecipeAction(e.target.value))}
              />
            </div>
            <BsCheckLg onClick={() => setEditFG(false)} className="icon" />
          </div>
        )}
        {!editFG && (
          <div className="valueObtaining-section-input">
            <div>{parseFloat(fg).toFixed(3)}</div>{" "}
            <FaPen onClick={() => setEditFG(true)} className="icon" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ValueObtaining;
