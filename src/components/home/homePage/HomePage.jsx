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
        <div className="homePage-main homepage-sticky-to-top">
          <ImList2 className="homePage-main-icon iconList" />
          <BsPencilFill className="homePage-main-icon iconPen" />
          <GiHops className="homePage-main-icon iconHops" />
          <GiWheat className="homePage-main-icon iconWheat" />
          <h1 className="mb-4">Recipes</h1>
          <Container>
            <Row className={`brewMainPage-row block`}>
              <Col
                className={`brewMainPage-section block`}
                onClick={() => navigate("/recipes")}
              >
                <img
                  src="https://i.etsystatic.com/20492529/r/il/442b0f/3153997959/il_fullxfull.3153997959_esj0.jpg"
                  alt="style"
                />
                <h2>My Favourite</h2>
                <div className="brewMainPage-step">1</div>
              </Col>
              <Col
                className={`brewMainPage-section block`}
                onClick={() => navigate("/recipes")}
              >
                <img
                  src="https://th.bing.com/th/id/OIP.CPsBCeMpHQ57V3weDLMbMQHaJg?pid=ImgDet&rs=1"
                  alt="ingredients"
                />
                <h2>All Recipes</h2>
                <div className="brewMainPage-step">2</div>
              </Col>
            </Row>
            <Row
              className={`brewMainPage-row block`}
              onClick={() => navigate("/recipes")}
            >
              <Col className={`brewMainPage-section block`}>
                <img
                  src="https://th.bing.com/th/id/OIP._xg6a-Ol2g2iwet6Ub3-mwHaHa?pid=ImgDet&rs=1"
                  alt="grain"
                />
                <h2>Drafts</h2>
                <div className="brewMainPage-step">3</div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="homePage-main">
          <div className="homePage-main-title">
            <h1 className="mb-4">Make a New Beer</h1>
          </div>
          <BrewInsideContainer block={"block"} />
        </div>
        <div className="homePage-main homepage-sticky-to-top">
          <AiOutlineSetting className="homePage-main-icon iconSetting" />
          <h1 className="mb-4">Instructions</h1>
          <Container>
            <Row className={`brewMainPage-row block`}>
              <Col
                className={`brewMainPage-section block`}
                onClick={() => navigate("/instruction")}
              >
                <img
                  src="https://media.istockphoto.com/vectors/vector-illustration-crossed-checkered-flag-on-white-background-vector-id1036071110?k=6&m=1036071110&s=170667a&w=0&h=KtmQAQjz7B0u_RFVaj1ZpGafdehWckm_VTAQFaSF-Io="
                  alt="style"
                />
                <h2>How to Start</h2>
                <div className="brewMainPage-step">1</div>
              </Col>
              <Col
                className={`brewMainPage-section block`}
                onClick={() => navigate("/instruction")}
              >
                <img
                  src="https://s-media-cache-ak0.pinimg.com/originals/36/86/82/368682c58984186b516cc255148e0f6b.jpg"
                  alt="ingredients"
                />
                <h2>Presonalize Recipe</h2>
                <div className="brewMainPage-step">2</div>
              </Col>
            </Row>
            <Row
              className={`brewMainPage-row block`}
              onClick={() => navigate("/instruction")}
            >
              <Col className={`brewMainPage-section block`}>
                <img
                  src="https://th.bing.com/th/id/R.7ae8e17c72cb2378351c77bd6a7a9eef?rik=KH4R8fHr2SJOxA&riu=http%3a%2f%2f4.bp.blogspot.com%2f-b2IwibtcZqM%2fT02RyBFnaCI%2fAAAAAAAACqk%2fONYbxGNQumk%2fs1600%2fhelp%2bwanted.png&ehk=4tltmXM8FhU03XvXEcemweCI7ygzdoss7kW8xQ2H9b0%3d&risl=&pid=ImgRaw&r=0"
                  alt="grain"
                />
                <h2>Help</h2>
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
