import "./commonEngredientsModal.css";
import NavbarIngredients from "../navbarIngredients/NavbarIngredients";
import { GiWheat } from "react-icons/gi";
import { HiSearch } from "react-icons/hi";
import CommonSingleElement from "./commonSingleElement/CommonSingleElement";
import { useState } from "react";
import AddProduct from "./addProduct/AddProduct";
import { useNavigate } from "react-router-dom";
const CommonEngredientsModal = ({ title, icon, colorOrIbu, next }) => {
  const [add, setAdd] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="common-ingredients-container">
      <div className="common-ingredients-container-inside">
        <div className="common-ingredients-container-inside-section-top">
          {!add && (
            <div className="common-ingredients-container-inside-title">
              Select {title}
            </div>
          )}
          {add && (
            <div className="common-ingredients-container-inside-title">
              Add {title}
            </div>
          )}
          <div className="common-ingredients-container-inside-icons">
            {icon}
          </div>
        </div>
        {!add && (
          <div className="common-ingredients-container-inside-section-middle">
            <div className="common-ingredients-container-inside-search">
              <div>
                <HiSearch />
              </div>
              <div className="common-ingredients-container-inside-search-input">
                <input type="text" placeholder="Search the product you need" />
              </div>
            </div>
            <CommonSingleElement icon={icon} colorOrIbu={colorOrIbu} />
            <CommonSingleElement icon={icon} colorOrIbu={colorOrIbu} />
          </div>
        )}
        {add && <AddProduct colorOrIbu={colorOrIbu} />}

        <div className="common-ingredients-container-inside-section-bottom">
          <div>
            {!add && (
              <div
                onClick={() => {
                  add !== false ? setAdd(false) : setAdd(true);
                  navigate(next);
                }}
              >
                Save and Proceed
              </div>
            )}
            {add && (
              <div
                onClick={() => {
                  add !== false ? setAdd(false) : setAdd(true);
                }}
              >
                Cancel
              </div>
            )}
          </div>
          <div>
            {add && (
              <div
                onClick={() => {
                  add !== false ? setAdd(false) : setAdd(true);
                }}
              >
                Edit
              </div>
            )}
          </div>

          <div
            className="malts-container-inside-section-bottom-add"
            onClick={() => {
              add !== false ? setAdd(false) : setAdd(true);
            }}
          >
            {!add && <div>+ Add a new {title}</div>}
            {add && <div>Save</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonEngredientsModal;
