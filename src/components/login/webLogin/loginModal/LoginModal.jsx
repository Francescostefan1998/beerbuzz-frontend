import "./loginModal.css";

const LoginModal = () => {
  return (
    <div className="loginModal-box">
      <div className="loginModal-form">
        <h2>Sign In</h2>
        <div className="loginModal-inputBox">
          <input type="text" required />
          <span>Email or Username </span>
          <i></i>
        </div>
        <div className="loginModal-inputBox">
          <input type="password" required />
        </div>
        <div className="loginModal-links">
          <br></br> <a href=""></a>
          <a href="">Sing In</a>
        </div>
        <input type="submit" value="Login" className="loginModal-submit" />
      </div>
    </div>
  );
};

export default LoginModal;
