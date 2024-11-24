const ButtonCal = ({ onButtonHandler }) => {
  let buttomAry = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className="container">
      {buttomAry.map((item) => (
        <button className="btnCal" onClick={() => onButtonHandler(item)}>
          {item}
        </button>
      ))}
    </div>
  );
};

export default ButtonCal;
