/*import "./navBar.css";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { AiFillHome } from "react-icons/ai";
import { IoMdBeer } from "react-icons/io";
import { MdContacts } from "react-icons/md";
import { IoIosListBox } from "react-icons/io";
import { AiFillSetting } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import SettingDropdown from "./settingDropdown/SettingDropdown";

const NavBar = () => {
  const [settingDropdown, setsettingDropdown] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="my-navbar">
      <div className="my-navbar-logo">logo</div>
      <div className="my-navbar-menue">
        <HiMenu className="my-navbar-icon" />
        <div className="my-navbar-sections" onClick={() => navigate("/home")}>
          <AiFillHome />
          <div>Home</div>
        </div>
        <div className="my-navbar-sections">
          <IoMdBeer />
          <div>Brew</div>
        </div>
        <div className="my-navbar-sections">
          <MdContacts />
          <div>Contact</div>
        </div>
        <div
          className="my-navbar-sections"
          onClick={() => navigate("/recipes")}
        >
          <IoIosListBox />
          <div>Recipes</div>
        </div>

        <div className="my-navbar-sections">
          <AiFillSetting
            onClick={() => {
              settingDropdown !== false
                ? setsettingDropdown(false)
                : setsettingDropdown(true);
            }}
          />
          <div
            onClick={() => {
              settingDropdown !== false
                ? setsettingDropdown(false)
                : setsettingDropdown(true);
            }}
          >
            Settings
          </div>
          {settingDropdown && (
            <SettingDropdown
              classname="settingDropdown"
              setSettingDropdown={setsettingDropdown}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;

*/ import "./navBar.css";
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
