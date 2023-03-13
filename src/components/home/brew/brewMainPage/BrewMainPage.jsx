import "./brewMainPage.css";
import NavBar from "../../navBar/NavBar";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import BrewInsideContainer from "./brewInsideContainer/BrewInsideContainer";
const BrewMainPage = () => {
  const navigate = useNavigate();
  return (
    <div className="brewMainPage">
      <NavBar selectedSection={"Brew"} />
      <div>
        <h1 className="mt-4">Follow the step below to make your beer</h1>
      </div>
      <BrewInsideContainer/>
    </div>
  );
};

export default BrewMainPage;
