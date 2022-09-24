import { useState } from 'react';

const Input = (props) => {
  const [input, setInput] = useState([]);
  console.log(input);
  //   const re = /([A-Fa-f])/

  //   const selectedCity = [];
  //   console.log(selectedCity);
  const handleInputChange = (e) => {
    setInput([...input, e.target.value]);
  };

  const resetInput = () => {
    setInput([]);
  };

  return (
    <div>
      <form action="">
        <label>
          {props.label}
          {/* <input
            type="text"
            name="input"
            id="routes"
            onChange={(e) => e.target.value === "" ||re.test(e.target.value)? setInput(e.target.value) : ""}
            value={input}
          /> */}

          <input
            type="button"
            value="A"
            id="optionA"
            onClick={handleInputChange}
          />
          <input
            type="button"
            value="B"
            id="optionB"
            onClick={handleInputChange}
          />
          <input
            type="button"
            value="C"
            id="optionC"
            onClick={handleInputChange}
          />
          <input
            type="button"
            value="D"
            id="optionD"
            onClick={handleInputChange}
          />
          <input
            type="button"
            value="E"
            id="optionE"
            onClick={handleInputChange}
          />
          <input
            type="button"
            value="F"
            id="optionF"
            onClick={handleInputChange}
          />
        </label>
        <input type="button" value="RESET" onClick={resetInput} />
      </form>
      <div>
        <p>CHOSEN ROUTE: {input}</p>
      </div>
    </div>
  );
};

export default Input;
