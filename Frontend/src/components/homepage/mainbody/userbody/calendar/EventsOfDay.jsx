export default function EventsOfDay({ isMiniC }) {
  return (
    <div>
      {isMiniC ? (
        <p>*</p>
      ) : (
        <ul>
          <li>event1</li>
          <li>event2</li>
        </ul>
      )}
    </div>
  );
}
