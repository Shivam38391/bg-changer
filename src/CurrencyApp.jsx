import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrency";
import "./App.css";

function CurrencyApp() {
  const [amount, setAmount] = useState(0);
  const [from, setfrom] = useState("usd");
  const [to, setto] = useState("inr");
  const [conversionAmount, setconversionAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  console.log("currencyInfo", currencyInfo);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setfrom(to);
    setto(from);

    setconversionAmount(amount);
    setAmount(conversionAmount);
  };

  const convert = () => {
    setconversionAmount(amount * currencyInfo[to]); // coverted amount
  };

  return (
    <div className="pb-9">
      <h1 className="text-4xl  pb-6  font-bold" >Currency Converter</h1>
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              //we want to call a method
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                ///they are propertis that i metioned in the component

                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setfrom(currency)}
                onAmountChange={(amount) => setAmount(amount)}
                selectCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                ///they are propertis that i metioned in the component
                amount={conversionAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setto(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CurrencyApp;
