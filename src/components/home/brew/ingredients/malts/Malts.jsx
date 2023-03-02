import "./malts.css";
import NavbarIngredients from "../navbarIngredients/NavbarIngredients";
import { GiWheat } from "react-icons/gi";
import { HiSearch } from "react-icons/hi";
import MaltSingleListElement from "./maltSingleListElement/MaltSingleListElement";
const Malts = () => {
  return (
    <div className="malts">
      <NavbarIngredients prew="/water" next="/hops" />
      <div className="malts-container">
        <div className="malts-container-inside">
          <div className="malts-container-inside-section-top">
            <div className="malts-container-inside-title">
              Select Fermentable
            </div>
            <div className="malts-container-inside-icons">
              <GiWheat />
            </div>
          </div>
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
          <div className="malts-container-inside-section-bottom">
            <div></div>
            <div className="malts-container-inside-section-bottom-add">
              + Add a new malt
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Malts;
