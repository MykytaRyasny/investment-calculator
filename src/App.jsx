import { useState } from 'react';
import CalculatorData from './components/CalculatorData.jsx';
import Header from './components/Header.jsx';
import Results from './components/Results.jsx';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration > 0;
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <CalculatorData
        onChange={handleChange}
        userInput={userInput}
      ></CalculatorData>
      {!inputIsValid && (
        <p className='center'>Please enter a duration greater than 0</p>
      )}
      {inputIsValid && <Results userInput={userInput}></Results>}
    </>
  );
}

export default App;
