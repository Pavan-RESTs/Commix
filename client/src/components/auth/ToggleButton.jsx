function ToggleButton(prop) {
  return (
    <>
      <div
        className="border rounded-pill p-1 mt-3"
        onClick={prop.toggleHandler}
      >
        <button
          type="button"
          className={`col-6 btn btn-primary rounded-pill fw-lighter ${
            prop.isLogin
              ? ""
              : "bg-transparent text-secondary fw-light border-0"
          }`}
        >
          Login
        </button>
        <button
          type="button"
          className={`col-6 btn btn-primary rounded-pill fw-lighter ${
            prop.isLogin
              ? "bg-transparent text-secondary fw-light border-0"
              : ""
          }`}
        >
          Register
        </button>
      </div>
    </>
  );
}

export default ToggleButton;
