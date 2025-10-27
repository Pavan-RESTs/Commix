import { useAlert } from "../context/AlertContext";
import Styles from "../styles/global.module.css";

function Alert(prop) {
  const { dismissAlert } = useAlert();

  return (
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
  );
}

export default Alert;
