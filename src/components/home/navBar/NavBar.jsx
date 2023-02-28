import "./navBar.css";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { AiFillHome } from "react-icons/ai";
import { IoMdBeer } from "react-icons/io";
import { MdContacts } from "react-icons/md";
import { IoIosListBox } from "react-icons/io";
import { AiFillSetting } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
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
          <AiFillSetting />
          <div>Settings</div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
