import "./loginBackground.css";
import LoginModal from "../loginModal/LoginModal";
import RegisterModal from "../../../register/RegisterModal";
import { useState } from "react";
const LoginBackground = () => {
  const [register, setRegister] = useState(false);
  const handleRegister = async () => {
    if (register) {
      setRegister(false);
    } else {
      setRegister(true);
    }
  };
  return (
    <div className="loginBackground">
      {!register && (
        <LoginModal
          setRegister={handleRegister}
          mainClass={"loginModal-box"}
          dispalayNone={"loginModal-box-display-none"}
          login={"Login"}
          signUp={"Sign Up"}
          title={"Sign In"}
        />
      )}
      {register && <RegisterModal setRegister={handleRegister} />}
    </div>
  );
};

export default LoginBackground;
