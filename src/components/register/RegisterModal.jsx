import "./registerModal.css";
import LoginModal from "../login/webLogin/loginModal/LoginModal";

const RegisterModal = ({ setRegister }) => {
  return (
    <div className="registerModal">
      <LoginModal
        mainClass={"loginModal-box"}
        dispalayNone={"loginModal-box-display"}
        login={"Sign Up"}
        signUp={"Login"}
        setRegister={setRegister}
        title={"Register"}
      />
    </div>
  );
};

export default RegisterModal;
