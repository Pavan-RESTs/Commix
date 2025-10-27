import { useAlert } from "../context/AlertContext";
import Styles from "../styles/global.module.css";

function Alert(prop) {
  const { dismissAlert } = useAlert();

  return (
    <div className={prop.showAlert ? Styles.slideIn : Styles.slideOut}>
      <div
        className={`alert alert-${prop.status} alert-dismissible ${Styles.customAlert}`}
        role="alert"
      >
        {prop.message}
        <button
          type="button"
          onClick={dismissAlert}
          className={`btn-close ${Styles.removeFocus}`}
        ></button>
      </div>
    </div>
  );
}

export default Alert;
