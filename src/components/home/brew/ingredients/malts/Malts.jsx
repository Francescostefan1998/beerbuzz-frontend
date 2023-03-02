import "./malts.css";
import NavbarIngredients from "../navbarIngredients/NavbarIngredients";
import { GiWheat } from "react-icons/gi";
import { HiSearch } from "react-icons/hi";
import MaltSingleListElement from "./maltSingleListElement/MaltSingleListElement";
import { useState } from "react";
import AddMalt from "./addMalt/AddMalt";
const Malts = () => {
  const [add, setAdd] = useState(false);
  return (
    <div className="malts">
      <NavbarIngredients prew="/water" next="/hops" />
      <div className="malts-container">
        <div className="malts-container-inside">
          <div className="malts-container-inside-section-top">
            {!add && (
              <div className="malts-container-inside-title">
                Select Fermentable
              </div>
            )}
            {add && (
              <div className="malts-container-inside-title">
                Add Fermentable
              </div>
            )}
            <div className="malts-container-inside-icons">
              <GiWheat />
            </div>
          </div>
          {!add && (
            <div className="malts-container-inside-section-middle">
              <div className="malts-container-inside-search">
                <div>
                  <HiSearch />
                </div>
                <div className="malts-container-inside-search-input">
                  <input
                    type="text"
                    placeholder="Search the fermentables you need"
                  />
                </div>
              </div>
              <MaltSingleListElement />
              <MaltSingleListElement />
            </div>
          )}
          {add && <AddMalt />}

          <div className="malts-container-inside-section-bottom">
            <div>
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
              {!add && <div>+ Add a new malt</div>}
              {add && <div>Save</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Malts;
