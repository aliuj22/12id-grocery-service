import './Input.css';
import { useState } from 'react';

const Input = (props) => {
  const possibleRoutes = [
    'AB',
    'AC',
    'AD',
    'BE',
    'CD',
    'CF',
    'DE',
    'EB',
    'EA',
    'FD',
  ];

  // const possibleRoutesWithCosts = [
  //   { route: 'AB', cost: 1 },
  //   { route: 'AC', cost: 4 },
  //   { route: 'AD', cost: 10 },
  //   { route: 'BE', cost: 3 },
  //   { route: 'CD', cost: 4 },
  //   { route: 'CF', cost: 2 },
  //   { route: 'DE', cost: 1 },
  //   { route: 'EB', cost: 3 },
  //   { route: 'EA', cost: 2 },
  //   { route: 'FD', cost: 1 },
  // ];

  //state handling
  const [input, setInput] = useState([]);
  console.log(input);

  //adding chosen cities
  const handleInputChange = (e) => {
    setInput([...input, e.target.value]);
  };

  //resetting the input array
  const resetInput = () => {
    setInput([]);
  };

  //creating pairs to compare the cities with
  let pairs = [];
  const createPairs = () => {
    for (var i = 0; i < input.length - 1; i++) {
      var currentElement = input[i];
      var nextElement = input[i + 1];
      pairs.push(currentElement + nextElement);
    }
    console.log(pairs);
    
    return pairs;
  };
  
  //checking which pairs are possible
  let match = [];
  const checkForMatches = () => {
    createPairs();
    for (let i = 0; i < possibleRoutes.length; i++) {
      for (let j = 0; j < pairs.length; j++) {
        console.log(possibleRoutes[i], pairs[j]);
        if (possibleRoutes[i] === pairs[j]) {
          //       // Return if common element found
          match.push(pairs[j]);
        }
      }
    }
    console.log("matches: ",match);
    return match
  };

//compare possible matches with original pairs from the input, only accept if all exist, if not "route not possible"


  const calculateDeliveryCost = (e) => {
    e.preventDefault();
    console.log('calc', input);
    checkForMatches();
  };

  return (
    <div>
      <form action="">
        <label>
          {props.label}
          <input
            type="button"
            value="A"
            id="optionA"
            className="route"
            onClick={handleInputChange}
          />
          <input
            type="button"
            value="B"
            id="optionB"
            className="route"
            onClick={handleInputChange}
          />
          <input
            type="button"
            value="C"
            id="optionC"
            className="route"
            onClick={handleInputChange}
          />
          <input
            type="button"
            value="D"
            id="optionD"
            className="route"
            onClick={handleInputChange}
          />
          <input
            type="button"
            value="E"
            id="optionE"
            className="route"
            onClick={handleInputChange}
          />
          <input
            type="button"
            value="F"
            id="optionF"
            className="route"
            onClick={handleInputChange}
          />
        </label>
        <input type="button" value="RESET" onClick={resetInput} />
        <input
          type="submit"
          value="Calculate delivery cost"
          onClick={calculateDeliveryCost}
        />
      </form>
      <div>
        <p>CHOSEN ROUTE: {input}</p>
      </div>
    </div>
  );
};

export default Input;
