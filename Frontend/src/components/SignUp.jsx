import { useState } from "react";

export default function SignUp({
  toggleComponent,
  singupClicked,
  signupEmail,
  singupName,
  signuppw,
  signuppw2,
  emailOnChange,
  nameOnChange,
  userPasswordOnChange,
  pwagainOnchange,
}) {
  const [isPwSame, setIsPwSame] = useState(true);

  const handleSignupClicked = (e) => {
    e.preventDefault();
    if (signuppw === signuppw2) {
      setIsPwSame(true);
      singupClicked();
    } else {
      setIsPwSame(false);
    }
  };

  return (
    <div>
      {!isPwSame && (
        <div className="alert alert-danger" role="alert">
          Passwords do not match. Please try again.
        </div>
      )}
      <form className="login-signup-form">
        <h1>Sign Up!</h1>

        <div className="row mb-3">
          <label for="inputEmail3" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              value={signupEmail}
              type="email"
              className="form-control"
              id="inputEmail3"
              onChange={emailOnChange}
            />
          </div>
        </div>

        <div class="input-group mb-3">
          <label> Username</label>
          <div className="col-sm-10">
            <input
              value={singupName}
              type="text"
              class="form-control"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={nameOnChange}
            />
          </div>
        </div>

        <div className="row mb-3">
          <label for="inputPassword3" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              value={signuppw}
              type="password"
              className="form-control"
              id="inputPassword3"
              onChange={userPasswordOnChange}
            />
          </div>
        </div>

        <div className="row mb-3">
          <label for="inputPassword3" className="col-sm-2 col-form-label">
            Password again
          </label>
          <div className="col-sm-10">
            <input
              value={signuppw2}
              type="password"
              className="form-control"
              id="inputPassword4"
              onChange={pwagainOnchange}
            />
          </div>
        </div>

        <button
          onClick={handleSignupClicked}
          type="submit"
          className="btn btn-primary"
        >
          Sign up
        </button>
        <button className="btn singup-redirect" onClick={toggleComponent}>
          {" "}
          I already have an account{" "}
        </button>
      </form>
    </div>
  );
}
