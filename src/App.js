import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginBackground from "./components/login/webLogin/loginBackground/LoginBackground";
import HomePage from "./components/home/homePage/HomePage";
import RecipesList from "./components/home/recipes/recipesList/RecipesList";
import BrewMainPage from "./components/home/brew/brewMainPage/BrewMainPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginBackground />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/recipes" element={<RecipesList />} />
          <Route path="/brew" element={<BrewMainPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
