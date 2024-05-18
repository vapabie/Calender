export default function NavBar({ isAdmin, onAddClicked, onSwitchClicked }) {
  const handleAddClicked = () => {
    onAddClicked();
    console.log("clicked");
  };

  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        {isAdmin ? (
          <div className="container-fluid">
            <div className="btn-group">
              <button
                href="colors"
                className="btn btn-primary"
                onClick={() => onSwitchClicked("color")}
              >
                Color
              </button>
              <button
                href="rewards"
                className="btn btn-primary"
                onClick={() => onSwitchClicked("reward")}
              >
                Reward
              </button>
              <button
                href="priorities"
                className="btn btn-primary"
                onClick={() => onSwitchClicked("priority")}
              >
                Priority
              </button>
            </div>
            <button type="button" className="btn" onClick={handleAddClicked}>
              +
            </button>
            <button type="button" className="btn">
              p
            </button>
          </div>
        ) : (
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
              <a href="month" className="btn btn-primary">
                Month
              </a>
              <a href="week" className="btn btn-primary">
                Week
              </a>
            </div>
            <div className="anp">
              <button type="button" className="btn" onClick={handleAddClicked}>
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
        )}
      </nav>
    </div>
  );
}
