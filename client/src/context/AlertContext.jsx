import { createContext, useContext, useState } from "react";
import Alert from "../components/Alert";

export const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const triggerAlert = (message, status) => {
    setMessage(message);
    setStatus(status);
    setShowAlert(true);
    setTimeout(() => {
      dismissAlert();
    }, 3600);
  };

  const dismissAlert = () => {
    setMessage("");
    setStatus("");
    setShowAlert(false);
  };

  return (
    <AlertContext.Provider value={{ triggerAlert, dismissAlert }}>
      {showAlert ? <Alert message={message} status={status} /> : ""}
      {children}
    </AlertContext.Provider>
  );
};

export const useAlert = () => useContext(AlertContext);
