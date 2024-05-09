import EventName from "./addevent/EventName";
import AllDay from "./addevent/AllDay";

function AddEvent() {
  return (
    <div>
      <EventName />
      <AddEvent />

      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Color
        </button>
        <ul class="dropdown-menu">
          <li>
            <a class="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </div>
      <button>save</button>
    </div>
  );
}

export default AddEvent;
