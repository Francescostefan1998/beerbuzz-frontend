import "./settingDropdown.css";
import { useEffect } from "react";
import { useState } from "react";
import { RiCloseLine } from "react-icons/ri";

const SettingDropdown = ({ classname, setSettingDropdown }) => {
  const [myclassname, setMyclassname] = useState("settingDropdown-previous");

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
        <div className="settingDropdown-main-section">profile</div>
        <div className="settingDropdown-main-section">help</div>
        <div className="settingDropdown-main-section">tool</div>
        <div className="settingDropdown-main-section">about</div>
        <div className="settingDropdown-main-section">instructions</div>
        <div className="settingDropdown-main-section">recipes</div>
        <div className="settingDropdown-main-section">raw material</div>
        <div className="settingDropdown-main-section">instructions</div>
        <div className="settingDropdown-main-section">recipes</div>
        <div className="settingDropdown-main-section">raw material</div>
      </div>
    </div>
  );
};

export default SettingDropdown;
