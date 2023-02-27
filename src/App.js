import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginBackground from "./components/login/webLogin/loginBackground/LoginBackground";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginBackground />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
