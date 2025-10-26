import { Images, Icons } from "../../constants/image-strings";
import { authService } from "../../services/authService";
import Styles from "../../styles/global.module.css";
import { useRef, useState } from "react";

function AuthForm(prop) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const passwordInputRef = useRef();

  const passwordVisibilityHandler = () => {
    setIsPasswordVisible(!isPasswordVisible);
    if (passwordInputRef.current.type === "password") {
      passwordInputRef.current.type = "text";
    } else {
      passwordInputRef.current.type = "password";
    }
  };

  return (
    <>
      <form className="mt-2" onSubmit={prop.submitHandler}>
        <div className="input-group mt-3">
          <input
            id="usernameInput"
            type="username"
            value={prop.credentials.username}
            onChange={prop.usernameHandler}
            className={`form-control rounded-start-pill py-2 ps-3 ${Styles.formInputPlaceholder}`}
            placeholder="Enter your username"
            required
          />
          <span className="input-group-text bg-transparent rounded-end-pill">
            <img src={Icons.UsernameIcon} alt="username" />
          </span>
        </div>
        <div className="input-group mt-3">
          <input
            id="passwordInput"
            type="password"
            value={prop.credentials.password}
            onChange={prop.passwordHandler}
            className={`form-control rounded-start-pill py-2 ps-3 ${Styles.formInputPlaceholder}`}
            placeholder="Enter your password"
            ref={passwordInputRef}
            required
          />
          <span className="input-group-text bg-transparent rounded-end-pill">
            {isPasswordVisible ? (
              <img
                role="button"
                className="p-0 m-0 "
                src={Icons.EyeBallIcon}
                alt="visibility"
                onClick={passwordVisibilityHandler}
              />
            ) : (
              <img
                role="button"
                className="p-0 m-0 "
                src={Icons.EyeBallObscuredIcon}
                alt="visibility"
                onClick={passwordVisibilityHandler}
              />
            )}
          </span>
        </div>
        <div className="d-flex align-items-center justify-content-between mt-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="rememberme"
            />
            <label className="form-check-label" htmlFor="rememberme">
              Remember Me
            </label>
          </div>
          <div>
            <button type="button" className="btn btn-link text-primary">
              Forgot Password?
            </button>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary col-12 rounded-pill mt-3 py-2 fw-lighter"
        >
          {prop.isLogin ? "Login" : "Submit"}
        </button>
        <div className="d-flex align-items-center justify-content-between mt-4">
          <hr className="flex-grow-1" />
          <span className="mx-3 text-secondary">or</span>
          <hr className="flex-grow-1" />
        </div>
        <button
          type="button"
          className={`col-12 btn border border-1 rounded-pill mt-3 py-2 d-flex align-items-center justify-content-center ${Styles.textBtnHover}`}
        >
          <img src={Images.GithubLogo} alt="github" width="24px" />
          <span className="fw-lighter ms-3"> Continue with Github</span>
        </button>
      </form>
    </>
  );
}

export default AuthForm;
