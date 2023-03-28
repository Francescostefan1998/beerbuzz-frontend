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
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import BrewInsideContainer from "../brew/brewMainPage/brewInsideContainer/BrewInsideContainer";
const HomePage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) navigate("/login");
    if (searchParams.get("accessToken")) {
      localStorage.setItem("accessToken", searchParams.get("accessToken"));
      localStorage.setItem("userId", searchParams.get("userId"));

      navigate("/home");
    }
  }, [navigate, searchParams]);
  return (
    <div className="homePage">
      <NavBar selectedSection={"Home"} />
      <div className="homePage-container">
        <div className="homePage-main homepage-sticky-to-top">
          <h1 className="mb-4">Recipes</h1>
          <Container>
            <Row className={`brewMainPage-row block`}>
              <Col
                className={`brewMainPage-section block`}
                onClick={() => navigate("/recipeFavourite")}
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
          <AiOutlineSetting
            className="homePage-main-icon iconSetting"
            onClick={() => navigate("/instruction")}
          />
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
                  src="https://i.pinimg.com/originals/d3/76/ea/d376ea8d40c4504bd933f75f17d1d7ce.jpg"
                  alt="ingredients"
                />
                <h2>Personalize Recipe</h2>
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
      <div className="homePage-container-for-small-page">
        <Container className="mt-5">
          <Row className={`brewMainPage-row block`}>
            <Col
              className={`brewMainPage-section block`}
              onClick={() => navigate("/recipes")}
            >
              <img
                src="https://thumbs.dreamstime.com/z/grande-insieme-d-annata-degli-oggetti-della-birra-vari-tipi-di-vetri-e-tazze-vecchio-barilotto-legno-luppolo-bottiglia-latta-apri-150652832.jpg"
                alt="style"
              />
              <h2>Recipes</h2>
              <div className="brewMainPage-step">1</div>
            </Col>
            <Col
              className={`brewMainPage-section block`}
              onClick={() => navigate("/brew")}
            >
              <img
                src="https://thumbnails.yayimages.com/1600/2/243/22439ea.jpg"
                alt="ingredients"
              />
              <h2>Make A New Beer</h2>
              <div className="brewMainPage-step">2</div>
            </Col>
          </Row>
          <Row
            className={`brewMainPage-row block`}
            onClick={() => navigate("/instruction")}
          >
            <Col className={`brewMainPage-section block`}>
              <img
                src="https://th.bing.com/th/id/OIP.CPsBCeMpHQ57V3weDLMbMQHaJg?pid=ImgDet&rs=1"
                alt="grain"
              />
              <h2>Instruction</h2>
              <div className="brewMainPage-step">3</div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
