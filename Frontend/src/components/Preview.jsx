function Preview() {
  const events = ["dentist", "zh", "mozi"];
  const listItems = events.map((event) => <li>{event}</li>);

  return (
    <div>
      <h2>Date</h2>
      <ul>{listItems}</ul>
    </div>
  );
}

export default Preview;
