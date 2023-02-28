import "./settingDropdown.css";
import { useEffect } from "react";
import { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const SettingDropdown = ({ classname, setSettingDropdown }) => {
  const [myclassname, setMyclassname] = useState("settingDropdown-previous");
  const navigate = useNavigate();
  useEffect(() => {
    setMyclassname(classname);
  }, [classname]);
  return (
    <div className={myclassname}>
      <div className="settingDropdown-top">
        <div className="settingDropdown-title mt-2">
          <h2>Settings</h2>
        </div>
        <div
          className="settingDropdown-close"
          onClick={() => setSettingDropdown(false)}
        >
          <RiCloseLine className="settingDropdown-close-icon" />
        </div>
      </div>
      <div className="settingDropdown-main">
        <div className="settingDropdown-main-section">Profile</div>
        <div className="settingDropdown-main-section">Help</div>
        <div className="settingDropdown-main-section">Tool</div>
        <div className="settingDropdown-main-section">About</div>
        <div className="settingDropdown-main-section">Instructions</div>
        <div
          className="settingDropdown-main-section"
          onClick={() => navigate("/recipes")}
        >
          Recipes
        </div>
        <div className="settingDropdown-main-section">Raw material</div>
        <div className="settingDropdown-main-section">Instructions</div>
        <div
          className="settingDropdown-main-section"
          onClick={() => navigate("/home")}
        >
          Home
        </div>
        <div
          className="settingDropdown-main-section"
          onClick={() => navigate("/contacts")}
        >
          Contacts
        </div>
        <div
          className="settingDropdown-main-section"
          onClick={() => navigate("/brew")}
        >
          Brew
        </div>
        <div
          className="settingDropdown-main-section"
          onClick={() => navigate("/")}
        >
          Exit
        </div>
      </div>
    </div>
  );
};

export default SettingDropdown;
