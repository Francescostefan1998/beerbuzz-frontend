import "./loginModal.css";
import { FaGoogle } from "react-icons/fa";

const LoginModal = () => {
  return (
    <div className="loginModal-box">
      <div className="loginModal-form">
        <h2>Sign In</h2>
        <div className="loginModal-inputBox">
          <input
            type="text"
            placeholder="Type here your email"
            id="loginModal-inputBox-input1"
          />
          <span>Email or Username </span>
          <hr />
        </div>
        <div className="loginModal-inputBox">
          <input
            type="password"
            placeholder="Type here your email"
            id="loginModal-inputBox-input2"
          />
          <span>Password </span>
          <hr />
        </div>
        <div className="loginModal-links">
          <br />
          <br /> <a href="">Login</a>
          <a href="">Sing Up</a>
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
