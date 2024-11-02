import { useState } from "react";

export default function Login({
  toggleComponent,
  loginClicked,
  loginEmail,
  loginpassword,
  emailOnChange,
  userPasswordOnChange,
  url,
}) {
  const [isValidLogin, setisValidLogin] = useState(true);
  const handleLoginClicked = (e) => {
    e.preventDefault();
    fetch(
      `${url}/validate-password?email=${loginEmail}&password=${loginpassword}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: loginEmail, password: loginpassword }),
      }
    )
      .then((response) => {
        if (response.status === 200) {
          console.log(
            "Password validation successful! Status:",
            response.status
          );
          setisValidLogin(true);
          loginClicked();
        } else if (response.status === 401) {
          console.log("Password validation failed. Status:", response.status);
          setisValidLogin(false);
        } else {
          console.log("Unexpected status:", response.status);
          setisValidLogin(false);
        }
      })
      .catch((error) => {
        console.error("Error validating password:", error);
        setisValidLogin(false);
      });
  };
  return (
    <div>
      {!isValidLogin && (
        <div className="alert alert-danger" role="alert">
          Passwords is not correct.
        </div>
      )}
      <form className="login-signup-form">
        <h1>Please log in</h1>
        <div className="row mb-3">
          <label for="inputEmail3" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              value={loginEmail}
              type="email"
              className="form-control"
              id="inputEmail3"
              onChange={emailOnChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label for="inputPassword3" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              value={loginpassword}
              type="password"
              className="form-control"
              id="inputPassword3"
              onChange={userPasswordOnChange}
            />
          </div>
        </div>

        <button
          onClick={handleLoginClicked}
          type="submit"
          className="btn btn-primary"
        >
          Sign in
        </button>
        <button className="btn singup-redirect" onClick={toggleComponent}>
          {" "}
          I don't have an account{" "}
        </button>
      </form>
    </div>
  );
}
