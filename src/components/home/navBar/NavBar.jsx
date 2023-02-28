import "./navBar.css";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { AiFillHome } from "react-icons/ai";
import { IoMdBeer } from "react-icons/io";
import { MdContacts } from "react-icons/md";
import { IoIosListBox } from "react-icons/io";
import { AiFillSetting } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import SettingDropdown from "./settingDropdown/SettingDropdown";

const NavBar = ({ selectedSection }) => {
  const [settingDropdown, setsettingDropdown] = useState(false);
  const navigate = useNavigate();
  const set = () => {
    return;
  };
  const sections = [
    { icon: <AiFillHome />, label: "Home" },
    { icon: <IoMdBeer />, label: "Brew" },
    { icon: <MdContacts />, label: "Contact" },
    { icon: <IoIosListBox />, label: "Recipes" },
    { icon: <AiFillSetting />, label: "Settings" },
  ];

  return (
    <div className="my-navbar">
      <div className="my-navbar-logo">logo</div>
      <div className="my-navbar-menue">
        <HiMenu className="my-navbar-icon" />
        {sections.map(({ icon, label }) => (
          <div
            key={label}
            className={`my-navbar-sections ${
              label === selectedSection ? "selected" : ""
            }`}
            onClick={() => {
              label !== "Settings"
                ? navigate(`/${label.toLowerCase()}`)
                : setsettingDropdown(true);
            }}
          >
            {icon}
            <div>{label}</div>
          </div>
        ))}
        {settingDropdown && (
          <SettingDropdown
            classname="settingDropdown"
            setSettingDropdown={setsettingDropdown}
          />
        )}
      </div>
    </div>
  );
};

export default NavBar;
