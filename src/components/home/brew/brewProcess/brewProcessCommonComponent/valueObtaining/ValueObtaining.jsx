import "./valueObtaining.css";
import { useState } from "react";
import { FaPen } from "react-icons/fa";
import { BsCheckLg } from "react-icons/bs";

const ValueObtaining = () => {
  const [editVolume, setEditVolume] = useState(false);
  const [editABV, setEditABV] = useState(false);
  const [editOG, setEditOG] = useState(false);
  const [editFG, setEditFG] = useState(false);
  const [editIBU, setEditIBU] = useState(false);
  const [editEBC, setEditEBC] = useState(false);

  return (
    <div className="valueObtaining">
      <div className="valueObtaining-section">
        <div className="valueObtaining-section-title">Batch Volume:</div>
        {editVolume && (
          <div className="valueObtaining-section-input">
            <div>
              <input type="text" placeholder="value" />
            </div>
            <BsCheckLg onClick={() => setEditVolume(false)} className="icon" />
          </div>
        )}
        {!editVolume && (
          <div className="valueObtaining-section-input">
            <div>26 L</div>{" "}
            <FaPen onClick={() => setEditVolume(true)} className="icon" />
          </div>
        )}
      </div>
      <div className="valueObtaining-section">
        <div className="valueObtaining-section-title">ABV:</div>
        {editABV && (
          <div className="valueObtaining-section-input">
            <div>
              <input type="text" placeholder="value" />
            </div>
            <BsCheckLg onClick={() => setEditABV(false)} className="icon" />
          </div>
        )}
        {!editABV && (
          <div className="valueObtaining-section-input">
            <div>26 L</div>{" "}
            <FaPen onClick={() => setEditABV(true)} className="icon" />
          </div>
        )}
      </div>
      <div className="valueObtaining-section">
        <div className="valueObtaining-section-title">EBC:</div>
        {editEBC && (
          <div className="valueObtaining-section-input">
            <div>
              <input type="text" placeholder="value" />
            </div>
            <BsCheckLg onClick={() => setEditEBC(false)} className="icon" />
          </div>
        )}
        {!editEBC && (
          <div className="valueObtaining-section-input">
            <div>26 L</div>{" "}
            <FaPen onClick={() => setEditEBC(true)} className="icon" />
          </div>
        )}
      </div>
      <div className="valueObtaining-section">
        <div className="valueObtaining-section-title">IBU:</div>
        {editIBU && (
          <div className="valueObtaining-section-input">
            <div>
              <input type="text" placeholder="value" />
            </div>
            <BsCheckLg onClick={() => setEditIBU(false)} className="icon" />
          </div>
        )}
        {!editIBU && (
          <div className="valueObtaining-section-input">
            <div>26 L</div>{" "}
            <FaPen onClick={() => setEditIBU(true)} className="icon" />
          </div>
        )}
      </div>
      <div className="valueObtaining-section">
        <div className="valueObtaining-section-title">OG:</div>
        {editOG && (
          <div className="valueObtaining-section-input">
            <div>
              <input type="text" placeholder="value" />
            </div>
            <BsCheckLg onClick={() => setEditOG(false)} className="icon" />
          </div>
        )}
        {!editOG && (
          <div className="valueObtaining-section-input">
            <div>26 L</div>{" "}
            <FaPen onClick={() => setEditOG(true)} className="icon" />
          </div>
        )}
      </div>
      <div className="valueObtaining-section">
        <div className="valueObtaining-section-title">FG:</div>
        {editFG && (
          <div className="valueObtaining-section-input">
            <div>
              <input type="text" placeholder="value" />
            </div>
            <BsCheckLg onClick={() => setEditFG(false)} className="icon" />
          </div>
        )}
        {!editFG && (
          <div className="valueObtaining-section-input">
            <div>26 L</div>{" "}
            <FaPen onClick={() => setEditFG(true)} className="icon" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ValueObtaining;
