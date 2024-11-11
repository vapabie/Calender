export default function NavBar({
  isAdmin,
  onAddClicked,
  onSwitchClicked,
  name,
}) {
  const handleAddClicked = () => {
    onAddClicked();
    console.log("clicked");
  };

  return (
    <div>
      <nav className="nav">
        {isAdmin ? (
          <div className="container-fluid navcon">
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
            <div className="navbuttons">
              <button type="button" className="btn" onClick={handleAddClicked}>
                +
              </button>
              <button type="button" className="btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-person"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                </svg>
              </button>
            </div>
          </div>
        ) : (
          <div className="container-fluid navcon">
            <div className="btn-group">
              <a className="btn btn-primary">Month</a>
            </div>
            <div>{name}'s Calendar</div>
            <div className="anp">
              <button type="button" className="btn" onClick={handleAddClicked}>
                +
              </button>
              <button type="button" className="btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-person"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
