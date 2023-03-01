import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginBackground from "./components/login/webLogin/loginBackground/LoginBackground";
import HomePage from "./components/home/homePage/HomePage";
import RecipesList from "./components/home/recipes/recipesList/RecipesList";
import BrewMainPage from "./components/home/brew/brewMainPage/BrewMainPage";
import Ingredients from "./components/home/brew/ingredients/Ingredients";
import SelectStyle from "./components/home/brew/selectStyle/SelectStyle";
import Water from "./components/home/brew/ingredients/water/Water";
import Others from "./components/home/brew/ingredients/others/Others";
import Malts from "./components/home/brew/ingredients/malts/Malts";
import Hops from "./components/home/brew/ingredients/hops/Hops";
import Yeasts from "./components/home/brew/ingredients/yeasts/Yeasts";

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
          <Route path="/ingredients" element={<Ingredients />} />
          <Route path="/selectstyle" element={<SelectStyle />} />
          <Route path="/water" element={<Water />} />
          <Route path="/malts" element={<Malts />} />
          <Route path="/hops" element={<Hops />} />
          <Route path="/yests" element={<Yeasts />} />
          <Route path="/others" element={<Others />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
