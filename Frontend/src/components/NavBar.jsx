function NavBar() {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <div className="btn-group">
            <a href="#" className="btn btn-primary">
              Month
            </a>
            <a href="#" className="btn btn-primary">
              Week
            </a>
          </div>
          <div className="anp">
            <button type="button" className="btn">
              +
            </button>
            <button type="button" className="btn">
              n
            </button>
            <button type="button" className="btn">
              p
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default NavBar;
