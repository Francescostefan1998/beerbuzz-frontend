import "./homePage.css";
import NavBar from "../navBar/NavBar";

const HomePage = () => {
  let bubbles1 = [];
  let bubbles2 = [];
  let bubbles3 = [];
  let bubbles4 = [];
  let bubbles5 = [];
  let bubbles6 = [];

  for (let i = 0; i < 10; i++) {
    bubbles1.push(
      <div style={{ left: i * 45 + "px" }} key={i} className="bubble bubble1" />
    );
  }
  for (let i = 0; i < 8; i++) {
    bubbles2.push(
      <div style={{ left: i * 77 + "px" }} key={i} className="bubble bubble2" />
    );
  }
  for (let i = 0; i < 12; i++) {
    bubbles3.push(
      <div style={{ left: i * 42 + "px" }} key={i} className="bubble bubble3" />
    );
  }
  for (let i = 0; i < 8; i++) {
    bubbles4.push(
      <div style={{ left: i * 67 + "px" }} key={i} className="bubble bubble4" />
    );
  }
  for (let i = 0; i < 10; i++) {
    bubbles5.push(
      <div style={{ left: i * 35 + "px" }} key={i} className="bubble bubble5" />
    );
  }
  for (let i = 0; i < 12; i++) {
    bubbles6.push(
      <div style={{ left: i * 52 + "px" }} key={i} className="bubble bubble3" />
    );
  }
  return (
    <div className="homePage">
      <NavBar />
      <div className="homePage-container">
        <div className="homePage-main">
          <h1>Recipes</h1>
        </div>
        <div className="homePage-main">
          <div className="homePage-main-title">
            <h1>Make a New Beer</h1>
          </div>

          <div className="homePage-main-liquid">
            <div className="homePage-main-liquid-baal1"></div>
            <div className="homePage-main-liquid-baal2"></div>
            <div className="homePage-main-liquid-baal3"></div>

            {bubbles1}
            {bubbles2}
            {bubbles3}
            {bubbles4}
            {bubbles5}
            {bubbles6}
          </div>
        </div>
        <div className="homePage-main">
          <h1>Instructions</h1>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
