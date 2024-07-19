export default function StringInput({ text, inputValue, onChange }) {
  return (
    <div>
      <input placeholder={text} value={inputValue} onChange={onChange} />
    </div>
  );
}
