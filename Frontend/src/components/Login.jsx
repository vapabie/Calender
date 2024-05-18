export default function Login({ toggleComponent }) {
  return (
    <form className="login-signup-form">
      <h1>Please log in</h1>
      <div className="row mb-3">
        <label for="inputEmail3" className="col-sm-2 col-form-label">
          Email
        </label>
        <div className="col-sm-10">
          <input type="email" className="form-control" id="inputEmail3" />
        </div>
      </div>
      <div className="row mb-3">
        <label for="inputPassword3" className="col-sm-2 col-form-label">
          Password
        </label>
        <div className="col-sm-10">
          <input type="password" className="form-control" id="inputPassword3" />
        </div>
      </div>

      <button type="submit" className="btn btn-primary">
        Sign in
      </button>
      <button className="btn singup-redirect" onClick={toggleComponent}>
        {" "}
        I don't have an account{" "}
      </button>
    </form>
  );
}
