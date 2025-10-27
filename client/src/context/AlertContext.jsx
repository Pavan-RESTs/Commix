import { createContext, useContext, useState } from "react";
import Alert from "../components/Alert";

export const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [timer, setTimer] = useState();

  const triggerAlert = async (message, status) => {
    if (timer) {
      dismissAlert();
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    setMessage(message);
    setStatus(status);
    setShowAlert(true);
    const dismissTimer = setTimeout(() => {
      dismissAlert();
    }, 2600);
    setTimer(dismissTimer);
  };

  const dismissAlert = () => {
    setShowAlert(false);
    clearTimeout(timer);
    setTimer(null);
  };

  return (
    <AlertContext.Provider value={{ triggerAlert, dismissAlert }}>
      {<Alert message={message} status={status} showAlert={showAlert} />}
      {children}
    </AlertContext.Provider>
  );
};

export const useAlert = () => useContext(AlertContext);
