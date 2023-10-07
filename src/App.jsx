import { useState } from "react";
import button from "./components/button";
import PassswordApp from "./components/Password";
import CurrencyApp from "./CurrencyApp";

import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  console.log(button);

  return (
    <>
      <div
        className="w-full h-screen duration-300"
        style={{ backgroundColor: color }}
      >
        <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-5 ">
          <div className="flex flex-wrap gap-4 shadow-lg  bg-white rounded-2xl px-5 py-2">
            {/* onClick need function that way we add call back  */}
            <button
              onClick={() => setColor("red")}
              className="px-4 rounded-lg text-white font-semibold"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>

            <button
              onClick={() => setColor("green")}
              className="px-4 rounded-lg text-white font-semibold"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>

            <button
              onClick={() => setColor("skyblue")}
              className="px-4 rounded-lg text-white font-semibold"
              style={{ backgroundColor: "skyblue" }}
            >
              skyblue
            </button>

            <button
              onClick={() => setColor("maroon")}
              className="px-4 rounded-lg text-white font-semibold"
              style={{ backgroundColor: "maroon" }}
            >
              maroon
            </button>

            <button
              onClick={() => setColor("lawngreen")}
              className="px-4 rounded-lg text-white font-semibold"
              style={{ backgroundColor: "lawngreen" }}
            >
              lawngreen
            </button>

            <button
              onClick={() => setColor("pink")}
              className="px-4 rounded-lg text-white font-semibold"
              style={{ backgroundColor: "pink" }}
            >
              pink
            </button>

            <button
              onClick={() => setColor("lavender")}
              className="px-4 rounded-lg text-white font-semibold"
              style={{ backgroundColor: "lavender" }}
            >
              lavender
            </button>
          </div>
        </div>

        <PassswordApp />


        <CurrencyApp/>
      </div>
    </>
  );
}

export default App;
