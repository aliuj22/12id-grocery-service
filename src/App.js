import './App.css';
import Input from './components/input/Input.js';
import { useState } from 'react';

function App() {
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

  const possibleRoutesWithCosts = [
    { name: 'AB', cost: 1 },
    { name: 'AC', cost: 4 },
    { name: 'AD', cost: 10 },
    { name: 'BE', cost: 3 },
    { name: 'CD', cost: 4 },
    { name: 'CF', cost: 2 },
    { name: 'DE', cost: 1 },
    { name: 'EB', cost: 3 },
    { name: 'EA', cost: 2 },
    { name: 'FD', cost: 1 },
  ];

  //state handling
  const [input, setInput] = useState([]);

  const [sum, setSum] = useState(0);

  //adding chosen cities
  const handleInputChange = (e) => {
    setInput([...input, e.target.value]);
  };

  //resetting the input array
  const resetInput = () => {
    setInput([]);
    setSum(0);
  };

  //creating pairs to compare the cities with
  let pairs = [];
  const createPairs = () => {
    for (var i = 0; i < input.length - 1; i++) {
      var currentElement = input[i];
      var nextElement = input[i + 1];
      pairs.push(currentElement + nextElement);
    }

    return pairs;
  };

  //checking which pairs are possible
  let match = [];
  const checkForMatches = () => {
    createPairs();
    for (let i = 0; i < possibleRoutes.length; i++) {
      for (let j = 0; j < pairs.length; j++) {
        if (possibleRoutes[i] === pairs[j]) {
          //       // Return if common element found
          match.push(pairs[j]);
        }
      }
    }
    return match;
  };

  //compare possible matches with original pairs from the input, only accept if all exist, if not "route not possible"
  let totalCost = 0;

  function areArraysMatchig() {
    checkForMatches();
    //check if all routes are possible
    if (match.sort().toString() === pairs.sort().toString()) {
      //loop through array containing the costs
      for (var i = 0; i < possibleRoutesWithCosts.length; i++) {
        //loop through chosen routes to select correct prices
        for (let j = 0; j < pairs.length; j++) {
          if (possibleRoutesWithCosts[i].name === pairs[j]) {
            totalCost += possibleRoutesWithCosts[i].cost;
          }
        }
      }
      setSum(totalCost);
      return sum;
    } else {
      setSum('No such route possible, reset to try again');
    }
  }

  const calculateDeliveryCost = (e) => {
    e.preventDefault();

    areArraysMatchig();
  };
  return (
    <div className="App">
      <h1>Calculate your delivery costs</h1>
      <Input
        label={'Choose Your Route: '}
        calculateDeliveryCost={calculateDeliveryCost}
        handleInputChange={handleInputChange}
        resetInput={resetInput}
        input={input}
        sum={sum}
      />
    </div>
  );
}

export default App;
