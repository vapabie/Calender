export default function SignUp({ toggleComponent }) {
  return (
    <form className="login-signup-form">
      <h1>Sign Up!</h1>

      <div className="row mb-3">
        <label for="inputEmail3" className="col-sm-2 col-form-label">
          Email
        </label>
        <div className="col-sm-10">
          <input type="email" className="form-control" id="inputEmail3" />
        </div>
      </div>

      <div class="input-group mb-3">
        <label> Username</label>
        <div className="col-sm-10">
          <input
            type="text"
            class="form-control"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
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

      <div className="row mb-3">
        <label for="inputPassword3" className="col-sm-2 col-form-label">
          Password again
        </label>
        <div className="col-sm-10">
          <input type="password" className="form-control" id="inputPassword3" />
        </div>
      </div>

      <button type="submit" className="btn btn-primary">
        Sign up
      </button>
      <button className="btn singup-redirect" onClick={toggleComponent}>
        {" "}
        I already have an account{" "}
      </button>
    </form>
  );
}
