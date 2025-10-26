import { useEffect } from "react";
import { useAlert } from "../hooks/useAlert";
import Styles from "../styles/global.module.css";

function Alert(prop) {
  const { dismissAlert } = useAlert();

  return prop.showAlert ? (
    <div
      className={`col-4 alert alert-${prop.status} alert-dismissible fade show ${Styles.customAlert}`}
      role="alert"
    >
      {prop.message}
      <button
        type="button"
        onClick={dismissAlert}
        className={`btn-close ${Styles.removeFocus}`}
      ></button>
    </div>
  ) : null;
}

export default Alert;
