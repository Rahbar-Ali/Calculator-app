const Displayed = ({ displayValue }) => {
  return (
    <input
      type="text"
      className="displayed"
      value={displayValue}
      readOnly
    ></input>
  );
};

export default Displayed;
