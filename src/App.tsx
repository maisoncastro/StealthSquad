import { useState } from "react";
import toast from "react-hot-toast";
import { Switch } from "@headlessui/react";
import "./App.css";
// import StaggeredAnimation from "./components/StaggeredAnimation";

function App() {
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [errorMessage, setErrorMessage] = useState("");

  const generatePassword = () => {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_-+=<>?/|{}[]~";

    let allowedChars = "";
    let generatedPassword = "";

    if (includeUppercase) allowedChars += uppercase;
    if (includeLowercase) allowedChars += lowercase;
    if (includeNumbers) allowedChars += numbers;
    if (includeSymbols) allowedChars += symbols;

    if (!allowedChars) {
      toast.error("Please select at least one option.");
      setPassword("");
      return;
    }

    setErrorMessage("");

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allowedChars.length);
      generatedPassword += allowedChars[randomIndex];
    }

    setPassword(generatedPassword);
  };

  return (
    <div className="flex flex-col justify-center items-center h-[100%] w-[100%]">
      {/* <StaggeredAnimation /> */}
      <span className="flex flex-row text-4xl mb-4">
        <img src="./logo-neon.svg" alt="logo" />
        <h1 className="p-5 font-semibold">StealthSquad</h1>
      </span>

      <div className="main-card flex flex-col	justify-around gap-[10px] items-start border-solid border-[1.5px] bg-[#242424] border-slate-400 p-8 rounded-xl h-[630px] w-[350px] sm:w-[408px] ">
        <div className="flex flex-col justify-around gap-[19px] items-center w-full">
          <label className="flex flex-row justify-between items-center w-full h-[53px] bg-[#434343] rounded-lg px-4">
            Include uppercase
            <Switch
              checked={includeUppercase}
              onChange={setIncludeUppercase}
              className={`${includeUppercase ? "bg-[#929292]" : "bg-[#929292]"}
      relative inline-flex items-center h-[18px] w-[50px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span className="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                className={`${
                  includeUppercase ? "translate-x-7" : "translate-x-0"
                } ${includeUppercase ? "bg-[#9dff50]" : "bg-white"}
        pointer-events-none inline-block h-[18px] w-[18px] transform bg-white rounded-full shadow-lg ring-0 transition duration-200 ease-in-out`}
              />
            </Switch>
          </label>
          <label className="flex flex-row justify-between items-center w-full px-4 bg-[#434343] rounded-lg h-[53px]">
            Include lowercase
            <Switch
              checked={includeLowercase}
              onChange={setIncludeLowercase}
              className={`${includeLowercase ? "bg-[#929292]" : "bg-[#929292]"}
        relative inline-flex items-center h-[18px] w-[51px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span className="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                className={`${
                  includeLowercase ? "translate-x-7" : "translate-x-0"
                } ${includeLowercase ? "bg-[#9dff50]" : "bg-white"}
          pointer-events-none inline-block h-[18px] w-[18px] transform bg-white rounded-full shadow-lg ring-0 transition duration-200 ease-in-out`}
              />
            </Switch>
          </label>

          <label className="flex flex-row justify-between items-center w-full px-4 h-[53px] bg-[#434343] rounded-lg">
            Include numbers
            <Switch
              checked={includeNumbers}
              onChange={setIncludeNumbers}
              className={`${includeNumbers ? "bg-[#929292]" : "bg-[#929292]"}
        relative inline-flex items-center h-[18px] w-[51px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span className="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                className={`${
                  includeNumbers ? "translate-x-7" : "translate-x-0"
                }
                ${includeNumbers ? "bg-[#9dff50]" : "bg-white"}
          pointer-events-none inline-block h-[18px] w-[18px] transform bg-white rounded-full shadow-lg ring-0 transition duration-200 ease-in-out`}
              />
            </Switch>
          </label>

          <label className="flex flex-row justify-between items-center w-full px-4 bg-[#434343] rounded-lg h-[53px]">
            Include symbols
            <Switch
              checked={includeSymbols}
              onChange={setIncludeSymbols}
              className={`${includeSymbols ? "bg-[#929292]" : "bg-[#929292]"}
              
        relative inline-flex items-center h-[18px] w-[51px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span className="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                className={`${
                  includeSymbols ? "translate-x-7" : "translate-x-0"
                } ${includeSymbols ? "bg-[#9dff50]" : "bg-white"}
          pointer-events-none inline-block h-[18px] w-[18px] transform bg-white rounded-full shadow-lg ring-0 transition duration-200 ease-in-out`}
              />
            </Switch>
          </label>
        </div>
        <div className="flex flex-col w-full px-4">
          <label className="mb-4">Password length: {length}</label>
          <input
            type="range"
            min="5"
            max="32"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
          />
        </div>
        <div className="flex items-center justify-center w-full">
          <button
            className={`flex items-center justify-center w-[212px] p-4 rounded-md text-sm transition duration-200 ${
              !includeUppercase &&
              !includeLowercase &&
              !includeNumbers &&
              !includeSymbols
                ? "bg-[#999999] text-[#fff] cursor-not-allowed"
                : "bg-[#9DFF50] hover:opacity-60 text-[#262626]"
            }`}
            onClick={generatePassword}
            disabled={
              !includeUppercase &&
              !includeLowercase &&
              !includeNumbers &&
              !includeSymbols
            }
          >
            Generate Password
          </button>
        </div>
        <div className="flex items-center justify-center w-full">
          <div className="flex items-center justify-center w-full h-[35px] bg-[#999999] text-[#9DFF50] p-4 rounded-md text-sm">
            {password ? password : "Click on Generate!"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
