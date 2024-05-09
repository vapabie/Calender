function Preview(props) {
  const events = ["dentist", "zh", "mozi"];
  const listItems = events.map((event) => <li>{event}</li>);

  return (
    <div>
      <h2>{props.insertDate}</h2>
      <ul>{listItems}</ul>
    </div>
  );
}

export default Preview;
