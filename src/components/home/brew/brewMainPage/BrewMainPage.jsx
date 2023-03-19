import "./brewMainPage.css";
import "../../recipes/recipesList/recipesList.css";
import NavBar from "../../navBar/NavBar";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SideBarLeft from "../sideBarLeft/SideBarLeft";
import BrewInsideContainer from "./brewInsideContainer/BrewInsideContainer";
const BrewMainPage = () => {
  const navigate = useNavigate();
  return (
    <div className="brewMainPage">
      <NavBar selectedSection={"Brew"} />
      <div className="selectStyle-sideBar-left">
        <SideBarLeft title={"Select Style"} subtitle={"r"} />
      </div>

      <div className="common-selection-bigger-container">
        <div className="brewMain-page-title">
          <h1>Follow the step below to make your beer</h1>
        </div>
        <BrewInsideContainer />
        <div className="selectStyle-list-proceed">
          <div
            className="selectStyle-list-proceed-button"
            onClick={() => navigate("/home")}
          >
            Back
          </div>
          <div
            className="selectStyle-list-proceed-button"
            onClick={() => {
              navigate("/selectStyle");
            }}
          >
            Proceed
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrewMainPage;
