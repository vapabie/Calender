export default function Message({
  assistentPic = "Frontendpublic\frog.jpg",
  text = "blablabla",
}) {
  return (
    <div>
      <img src={assistentPic} alt="" />
      <p>{text}</p>
    </div>
  );
}
