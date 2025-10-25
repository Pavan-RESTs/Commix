function ToggleButton(prop) {
  return (
    <>
      <div className="border rounded-pill p-1 mt-3">
        <button
          type="button"
          className={`col-6 btn btn-primary rounded-pill fw-lighter ${
            prop.isSignIn
              ? ""
              : "bg-transparent text-secondary fw-light border-0"
          }`}
          onClick={prop.toggleHandler}
        >
          Sign In
        </button>
        <button
          type="button"
          className={`col-6 btn btn-primary rounded-pill fw-lighter ${
            prop.isSignIn
              ? "bg-transparent text-secondary fw-light border-0"
              : ""
          }`}
          onClick={prop.toggleHandler}
        >
          Sign Up
        </button>
      </div>
    </>
  );
}

export default ToggleButton;
