import "./loginModal.css";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const LoginModal = ({
  setRegister,
  mainClass,
  dispalayNone,
  login,
  signUp,
  title,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (email, password) => {
    try {
      const { data } = await axios.post("http://localhost:3001/users/login", {
        email,
        password,
      });
      toast("Login successfull! 💪", { autoClose: 1000 });
      localStorage.setItem("accessToken", data.accessToken);
      navigate("/home");
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const handlePost = async (email, password) => {
    await fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleLogin = async (title, email, password) => {
    if (title === "Register") {
      await handlePost(email, password);
      handleSubmit(email, password);
    } else {
      handleSubmit(email, password);
    }
  };

  return (
    <div className={mainClass}>
      <div className="loginModal-form">
        <h2>{title}</h2>
        <div className="loginModal-inputBox">
          <input
            type="text"
            placeholder="Type here your email"
            id="loginModal-inputBox-input1"
            onChange={(e) => setEmail(e.target.value)}
          />
          <span>Email or Username </span>
          <hr />
        </div>
        <div className="loginModal-inputBox">
          <input
            type="password"
            placeholder="Type here your email"
            id="loginModal-inputBox-input2"
            onChange={(e) => setPassword(e.target.value)}
          />
          <span>Password </span>
          <hr />
        </div>
        <div className="loginModal-inputBox" id={dispalayNone}>
          <input
            type="password"
            placeholder="Type here your email"
            id="loginModal-inputBox-input3"
          />
          <span>Confirm password </span>
          <hr />
        </div>
        <div className="loginModal-links">
          <div
            className="loginModal-links-click"
            onClick={() => handleLogin(title, email, password)}
          >
            {login}
          </div>
          <div className="loginModal-links-click" onClick={setRegister}>
            {signUp}
          </div>
        </div>
        <div className="loginModal-google">
          <div className="loginModal-google-inset">
            <FaGoogle className="loginModal-google-inset-icon" />
            <div>Login with Google</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
