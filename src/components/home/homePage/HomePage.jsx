import "../brew/brewMainPage/brewMainPage.css";
import "./homePage.css";
import NavBar from "../navBar/NavBar";
import { Container, Row, Col } from "react-bootstrap";
import { ImList2 } from "react-icons/im";
import { BsPencilFill } from "react-icons/bs";
import { GiHops } from "react-icons/gi";
import { GiWheat } from "react-icons/gi";
import { AiOutlineSetting } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import BrewInsideContainer from "../brew/brewMainPage/brewInsideContainer/BrewInsideContainer";
const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="homePage">
      <NavBar selectedSection={"Home"} />
      <div className="homePage-container">
        <div
          className="homePage-main homepage-sticky-to-top"
          onClick={() => navigate("/recipes")}
        >
          <ImList2 className="homePage-main-icon iconList" />
          <BsPencilFill className="homePage-main-icon iconPen" />
          <GiHops className="homePage-main-icon iconHops" />
          <GiWheat className="homePage-main-icon iconWheat" />
          <h1 className="mb-4">Recipes</h1>
          <Container>
            <Row className={`brewMainPage-row block`}>
              <Col
                className={`brewMainPage-section block`}
                onClick={() => navigate("/selectstyle")}
              >
                <img
                  src="https://i.etsystatic.com/20492529/r/il/442b0f/3153997959/il_fullxfull.3153997959_esj0.jpg"
                  alt="style"
                />
                <h1>My Favourite</h1>
                <div className="brewMainPage-step">1</div>
              </Col>
              <Col
                className={`brewMainPage-section block`}
                onClick={() => navigate("/ingredients")}
              >
                <img
                  src="https://th.bing.com/th/id/OIP.CPsBCeMpHQ57V3weDLMbMQHaJg?pid=ImgDet&rs=1"
                  alt="ingredients"
                />
                <h1>All Recipes</h1>
                <div className="brewMainPage-step">2</div>
              </Col>
            </Row>
            <Row className={`brewMainPage-row block`}>
              <Col className={`brewMainPage-section block`}>
                <img
                  src="https://th.bing.com/th/id/OIP._xg6a-Ol2g2iwet6Ub3-mwHaHa?pid=ImgDet&rs=1"
                  alt="grain"
                />
                <h1>Drafts</h1>
                <div className="brewMainPage-step">3</div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="homePage-main" onClick={() => navigate("/brew")}>
          <div className="homePage-main-title">
            <h1 className="mb-4">Make a New Beer</h1>
          </div>
          <BrewInsideContainer block={"block"} />
        </div>
        <div
          className="homePage-main homepage-sticky-to-top"
          onClick={() => navigate("/instruction")}
        >
          <AiOutlineSetting className="homePage-main-icon iconSetting" />
          <h1 className="mb-4">Instructions</h1>
          <Container>
            <Row className={`brewMainPage-row block`}>
              <Col
                className={`brewMainPage-section block`}
                onClick={() => navigate("/selectstyle")}
              >
                <img
                  src="https://thumbs.dreamstime.com/z/grande-insieme-d-annata-degli-oggetti-della-birra-vari-tipi-di-vetri-e-tazze-vecchio-barilotto-legno-luppolo-bottiglia-latta-apri-150652832.jpg"
                  alt="style"
                />
                <h1>How to Start</h1>
                <div className="brewMainPage-step">1</div>
              </Col>
              <Col
                className={`brewMainPage-section block`}
                onClick={() => navigate("/ingredients")}
              >
                <img
                  src="https://thumbnails.yayimages.com/1600/2/243/22439ea.jpg"
                  alt="ingredients"
                />
                <h1>Presonalize Recipe</h1>
                <div className="brewMainPage-step">2</div>
              </Col>
            </Row>
            <Row className={`brewMainPage-row block`}>
              <Col className={`brewMainPage-section block`}>
                <img
                  src="https://i.pinimg.com/originals/ec/2b/57/ec2b5789fa7128f5f178aac22c15fc16.jpg"
                  alt="grain"
                />
                <h1>Help</h1>
                <div className="brewMainPage-step">3</div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
