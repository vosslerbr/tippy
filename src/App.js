import { useState } from "react";
import CurrencyInput from "react-currency-input-field";
import "./styles/styles.css";

const tipOptions = [5, 10, 15, 20, 25, 30];

function App() {
  const [selectedTip, setSelectedTip] = useState(0);
  const [billAmount, setBillAmount] = useState(0);
  return (
    <div className="app-container">
      <h1>Tippy</h1>

      <CurrencyInput
        prefix="$"
        id="bill-amount"
        name="bill-amount"
        //defaultValue={0}
        decimalsLimit={2}
        onValueChange={(value) => {
          const valueNumber = Number(value);
          console.log(valueNumber);
          setBillAmount(valueNumber);
        }}
        autoFocus={true}
      />
      <div className="tip-selectors-container">
        {tipOptions.map((option) => {
          return (
            <button
              key={option}
              onClick={() => setSelectedTip(option)}
              className={option === selectedTip ? "selected" : "not-selected"}
            >
              <span>{option}%</span>
              <span>
                $
                {(Math.ceil(billAmount * (option / 100) * 100) / 100).toFixed(
                  2
                )}
              </span>
            </button>
          );
        })}
      </div>

      <p>
        {/* Calculate bill + tip, convert to cents, round to nearest cent, convert back to dollars */}
        Your Total
        <br />
        <span>
          $
          {(
            Math.round((billAmount + billAmount * (selectedTip / 100)) * 100) /
            100
          ).toFixed(2)}
        </span>
      </p>
    </div>
  );
}

export default App;
