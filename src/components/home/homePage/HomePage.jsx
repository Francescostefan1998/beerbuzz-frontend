import "./homePage.css";
import NavBar from "../navBar/NavBar";

const HomePage = () => {
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

          <div className="homePage-main-liquid"></div>
        </div>
        <div className="homePage-main">
          <h1>Instructions</h1>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
