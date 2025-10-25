import { Images, Icons } from "../constants/image-strings";
import Styles from "../styles/global.module.css";
import { useState } from "react";

function AuthForm(prop) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const passwordVisibilityHandler = () => {
    setIsPasswordVisible(!isPasswordVisible);
    const passwordInput = document.querySelector("#passwordInput");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  };

  return (
    <>
      <form className="mt-2" onSubmit={prop.submitHandler}>
        <div className="input-group mt-3">
          <input
            id="emailInput"
            type="email"
            value={prop.email.email}
            onChange={prop.email.emailHandler}
            className={`form-control border-end-0 rounded-start-pill py-2 ${Styles.formInputPlaceholder}`}
            placeholder="Enter your email"
          />
          <span className="input-group-text bg-transparent rounded-end-pill">
            <img src={Icons.EmailIcon} alt="email" />
          </span>
        </div>
        <div className="input-group mt-3">
          <input
            id="passwordInput"
            type="password"
            value={prop.password.password}
            onChange={prop.password.passwordHandler}
            className={`form-control border-end-0 rounded-start-pill py-2 ${Styles.formInputPlaceholder}`}
            placeholder="Enter your password"
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
          {prop.isSignIn ? "Login" : "Submit"}
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
