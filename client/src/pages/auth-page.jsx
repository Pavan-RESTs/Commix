import ToggleButton from "../components/toggle-button";
import AuthForm from "../components/auth-form";
import { useState } from "react";
import { Images, Icons } from "../constants/image-strings";
import Styles from "../styles/global.module.css";

function AuthPage() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleHandler = () => {
    setIsSignIn(!isSignIn);
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const signinHandler = (event) => {
    event.preventDefault();
    console.log("Login Successful");
  };

  const signupHandler = (event) => {
    event.preventDefault();
    console.log("Sign-Up Successful");
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="container">
          <div className="row justify-content-evenly align-items-center">
            <div className="col col-5">
              <div className="d-flex align-items-center">
                <img src={Images.AppLogo} alt="commix logo" width="60px" />
                <span className="display-3 fw-lighter mb-0 ms-4"> Commix </span>
              </div>
              <h1 className="mt-3 fw-light"> Welcome Back! </h1>
              <p className="fs-5 fw-lighter text-secondary">
                We Are Happy To See You Again
              </p>
              <ToggleButton isSignIn={isSignIn} toggleHandler={toggleHandler} />
              <AuthForm
                isSignIn={isSignIn}
                email={{ email, emailHandler }}
                password={{ password, passwordHandler }}
                submitHandler={isSignIn ? signinHandler : signupHandler}
              />
             
            </div>
            {/* TODO: Vector has to be changed */}
            <div className="col col-5 text-center">
              <img
                src={Images.AuthPageVector}
                alt="signin or signup"
                width="600px"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthPage;
