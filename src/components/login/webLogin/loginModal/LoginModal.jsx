import "./loginModal.css";
import React from "react";
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
  const url = process.env.REACT_APP_BE_URL;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (email, password) => {
    setLoading(true);
    try {
      const { data } = await axios.post(`${url}/users/login`, {
        email,
        password,
      });
      toast("Login successfull! 💪", { autoClose: 1000 });
      console.log(data);

      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("userId", data._id);
      setLoading(false);

      navigate("/home");
    } catch (error) {
      setLoading(false);

      alert("wrong email or password");

      setError(error.response.data.message);
    }
  };

  const handlePost = async (email, password) => {
    await fetch(`${url}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        image: [],
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

  const handleLogin = async (title, email, password, confirmpassword) => {
    if (title === "Register") {
      if (password === confirmpassword) {
        await handlePost(email, password);
        handleSubmit(email, password);
      } else {
        alert("Password doesn't match");
      }
    } else {
      handleSubmit(email, password);
    }
  };

  return (
    <div className={mainClass}>
      <div className="loginModal-form">
        {loading && (
          <div class="loading-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
        {!loading && (
          <>
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
                onChange={(e) => setConfPassword(e.target.value)}
              />
              <span>Confirm password </span>
              <hr />
            </div>
            <div className="loginModal-links">
              <div
                className="loginModal-links-click"
                onClick={() =>
                  handleLogin(title, email, password, confirmPassword)
                }
              >
                {login}
              </div>
              <div className="loginModal-links-click" onClick={setRegister}>
                {signUp}
              </div>
            </div>
            <a
              href={`https://beerbuzz-backend-production.up.railway.app/users/googleLogin`}
            >
              <div className="loginModal-google">
                <div className="loginModal-google-inset">
                  <FaGoogle className="loginModal-google-inset-icon" />
                  <div>Login with Google</div>
                </div>
              </div>
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginModal;
