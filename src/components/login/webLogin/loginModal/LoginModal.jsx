import "./loginModal.css";
import { FaGoogle } from "react-icons/fa";

const LoginModal = ({
  setRegister,
  mainClass,
  dispalayNone,
  login,
  signUp,
  title,
}) => {
  return (
    <div className={mainClass}>
      <div className="loginModal-form">
        <h2>{title}</h2>
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
          <div className="loginModal-links-click">{login}</div>
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
