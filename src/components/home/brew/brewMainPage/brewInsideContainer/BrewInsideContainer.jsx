import "../brewMainPage.css";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const BrewInsideContainer = ({ block }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <Row className={`brewMainPage-row ${block}`}>
        <Col
          className={`brewMainPage-section ${block}`}
          onClick={() => navigate("/selectstyle")}
        >
          <img
            src="https://thumbs.dreamstime.com/z/grande-insieme-d-annata-degli-oggetti-della-birra-vari-tipi-di-vetri-e-tazze-vecchio-barilotto-legno-luppolo-bottiglia-latta-apri-150652832.jpg"
            alt="style"
          />
          <h1>Select a style</h1>
          <div className="brewMainPage-step">1</div>
        </Col>
        <Col
          className={`brewMainPage-section ${block}`}
          onClick={() => navigate("/ingredients")}
        >
          <img
            src="https://thumbnails.yayimages.com/1600/2/243/22439ea.jpg"
            alt="ingredients"
          />
          <h1>Ingredients</h1>
          <div className="brewMainPage-step">2</div>
        </Col>
      </Row>
      <Row className={`brewMainPage-row ${block}`}>
        <Col className={`brewMainPage-section ${block}`}>
          <img
            src="https://i.pinimg.com/originals/ec/2b/57/ec2b5789fa7128f5f178aac22c15fc16.jpg"
            alt="grain"
          />
          <h1>Mash</h1>
          <div className="brewMainPage-step">3</div>
        </Col>
        <Col className={`brewMainPage-section ${block}`}>
          <img
            src="https://media.istockphoto.com/vectors/hops-seamless-pattern-vector-illustration-background-with-hop-hand-vector-id1350080899?s=612x612"
            alt="hops"
          />

          <h1>Boil</h1>
          <div className="brewMainPage-step">4</div>
        </Col>
      </Row>
      <Row className={`brewMainPage-row ${block}`}>
        <Col className={`brewMainPage-section ${block}`}>
          <img
            src="https://th.bing.com/th/id/R.b21ed8463990bcbec9f59fcf9008e6f8?rik=x5zavyRiVngscA&riu=http%3a%2f%2fetc.usf.edu%2fclipart%2f15400%2f15447%2fgrwyeastcell_15447_md.gif&ehk=WkfyJJg0H6T1cSkozZXbWz24YqAKzBGFgZOW%2fM9hIT4%3d&risl=&pid=ImgRaw&r=0"
            alt="yeast"
          />
          <img
            className="mt-5"
            src="https://th.bing.com/th/id/R.b21ed8463990bcbec9f59fcf9008e6f8?rik=x5zavyRiVngscA&riu=http%3a%2f%2fetc.usf.edu%2fclipart%2f15400%2f15447%2fgrwyeastcell_15447_md.gif&ehk=WkfyJJg0H6T1cSkozZXbWz24YqAKzBGFgZOW%2fM9hIT4%3d&risl=&pid=ImgRaw&r=0"
            alt="yeast"
          />
          <h1>Fermentation</h1>
          <div className="brewMainPage-step">5</div>
        </Col>
        <Col className={`brewMainPage-section ${block}`}>
          <img
            src="https://th.bing.com/th/id/OIP.L1fecSeXJixZLAYWMGeSCQHaEA?pid=ImgDet&w=718&h=388&rs=1"
            alt="results"
          />
          <h1>Results</h1>
          <div className="brewMainPage-step">6</div>
        </Col>
      </Row>
    </Container>
  );
};

export default BrewInsideContainer;
