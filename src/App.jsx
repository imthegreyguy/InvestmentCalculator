import { calculateInvestmentResults } from './util/investment';
import Header from './components/Header';
import Results from './components/Results';
import Input from './components/Input';
import { useState } from 'react';

function App() {
  const [ascending, setAscending] = useState(true)
  const [inputs, setInputs] = useState({
    initialInvestment: 62410,
    annualInvestment: 5011,
    expectedReturn: 0.45,
    duration: 10
  })

  const results = calculateInvestmentResults({
    initialInvestment: inputs.initialInvestment,
    annualInvestment: inputs.annualInvestment,
    expectedReturn: inputs.expectedReturn,
    duration: inputs.duration
  })

  function handleUpdatedValue(tag, newValue) {
    setInputs(previousInputs => {
      return {
        ...previousInputs,
        [tag]: newValue
      }
    })
  }

  function handleSortClick() {
    setAscending(!ascending)
  }

  return (
    <main>
      {/* Header */}
      <Header title='Investment Calculator' image='/investment-calculator-logo.png' />

      {/* Inputs */}
      <div id='user-input'>
        <div className='input-group'>
          <Input
            label="Initial Investment"
            handleUpdatedValue={handleUpdatedValue}
            tag="initialInvestment"
            initialValue={inputs.initialInvestment}
          />
          <Input
            label="Annual Investment"
            handleUpdatedValue={handleUpdatedValue}
            tag="annualInvestment"
            initialValue={inputs.annualInvestment}
          />
        </div>
        <div className='input-group'>
          <Input
            label="Expected Return Percentage"
            handleUpdatedValue={handleUpdatedValue}
            tag="expectedReturn"
            initialValue={inputs.expectedReturn}
          />
          <Input
            label="Duration (Years)"
            handleUpdatedValue={handleUpdatedValue}
            tag="duration"
            initialValue={inputs.duration}
          />
        </div>
      </div>

      <div className='center'>
        <button id='button' onClick={handleSortClick}>Change Sort</button>
      </div>

      {/* Results */}
      <Results results={ascending ? results : results.reverse()} />
    </main>
  );
}

export default App;
