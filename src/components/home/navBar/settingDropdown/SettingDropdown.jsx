import "./settingDropdown.css";
import { useEffect } from "react";
import { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { BiHelpCircle } from "react-icons/bi";
import { FiTool } from "react-icons/fi";
import { MdContactSupport } from "react-icons/md";
import { RiSettings4Fill } from "react-icons/ri";
import { CiWheat } from "react-icons/ci";
import { FaListOl } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { IoIosContact } from "react-icons/io";
import { BiBeer } from "react-icons/bi";
import { BiExit } from "react-icons/bi";

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
        <div className="settingDropdown-main-section">
          {" "}
          <CgProfile /> Profile
        </div>
        <div className="settingDropdown-main-section">
          <BiHelpCircle /> Help
        </div>
        <div className="settingDropdown-main-section">
          <FiTool /> Tool
        </div>
        <div className="settingDropdown-main-section">
          <MdContactSupport /> About
        </div>
        <div
          className="settingDropdown-main-section"
          onClick={() => navigate("/instruction")}
        >
          <RiSettings4Fill /> Instructions
        </div>
        <div
          className="settingDropdown-main-section"
          onClick={() => navigate("/recipes")}
        >
          <FaListOl />
          Recipes
        </div>
        <div
          className="settingDropdown-main-section"
          onClick={() => navigate("/ingredients")}
        >
          <CiWheat /> Raw material
        </div>
        <div
          className="settingDropdown-main-section"
          onClick={() => navigate("/home")}
        >
          <AiFillHome />
          Home
        </div>
        <div
          className="settingDropdown-main-section"
          onClick={() => navigate("/contacts")}
        >
          <IoIosContact />
          Contacts
        </div>
        <div
          className="settingDropdown-main-section"
          onClick={() => navigate("/brew")}
        >
          <BiBeer />
          Brew
        </div>
        <div
          className="settingDropdown-main-section"
          onClick={() => navigate("/")}
        >
          <BiExit />
          Exit
        </div>
      </div>
    </div>
  );
};

export default SettingDropdown;
