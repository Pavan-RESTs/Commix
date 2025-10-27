import ToggleButton from "../components/auth/ToggleButton";
import AuthForm from "../components/auth/AuthForm";
import { useState } from "react";
import { Images, Icons } from "../constants/image-strings";
import { useAuth } from "../context/AuthContext";
import { useAlert } from "../context/AlertContext";

function AuthPage() {
  const { triggerAlert } = useAlert();

  const { login, register } = useAuth();

  const [isLogin, setIsLogin] = useState(true);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const toggleHandler = () => {
    setIsLogin(!isLogin);
  };

  const usernameHandler = (event) => {
    setCredentials({
      username: event.target.value,
      password: credentials.password,
    });
  };

  const passwordHandler = (event) => {
    setCredentials({
      username: credentials.username,
      password: event.target.value,
    });
  };

  const loginHandler = async (event) => {
    event.preventDefault();
    try {
      const data = await login(credentials);
      triggerAlert("Login successful", "success");
    } catch (error) {
      triggerAlert(error.response?.data?.errorMessage, "danger");
    }
  };

  const registerHandler = async (event) => {
    event.preventDefault();
    try {
      await register(credentials);
      triggerAlert("Registration successful", "success");
      setCredentials({ username: "", password: "" });
    } catch (error) {
      triggerAlert(error.response?.data?.errorMessage, "danger");
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="container">
          <div className="row justify-content-around align-items-center">
            <div className="col col-lg-5 col-8">
              <div className="d-flex align-items-center">
                <img src={Images.AppLogo} alt="commix logo" width="60px" />
                <span className="display-3 fw-lighter mb-0 ms-4"> Commix </span>
              </div>
              <h1 className="mt-3 fw-light"> Welcome Back! </h1>
              <p className="fs-5 fw-lighter text-secondary">
                We Are Happy To See You Again
              </p>
              <ToggleButton isLogin={isLogin} toggleHandler={toggleHandler} />
              <AuthForm
                isLogin={isLogin}
                credentials={credentials}
                usernameHandler={usernameHandler}
                passwordHandler={passwordHandler}
                submitHandler={isLogin ? loginHandler : registerHandler}
              />
            </div>
            {/* TODO: Vector has to be changed */}
            <div className="col-5 d-none d-lg-block text-center">
              <img
                className="col-10"
                src={Images.AuthPageVector}
                alt="login or register"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthPage;
