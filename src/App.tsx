import { useState } from "react";
import toast from "react-hot-toast";
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

      <div className="main-card flex flex-col	justify-around gap-[10px] items-start border-solid border-[1.5px] bg-[#242424] border-slate-400 p-8 rounded-xl h-[630px] w-[408px] ">
        <div className="flex flex-col justify-around gap-[19px] items-center w-full">
          <label className="flex flex-row justify-between items-center w-full h-[53px] bg-[#434343] rounded-lg px-4">
            Include uppercase
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={() => setIncludeUppercase(!includeUppercase)}
            />
          </label>
          <label className="flex flex-row justify-between  items-center w-full px-4 bg-[#434343] rounded-lg h-[53px]">
            Include lowercase
            <input
              type="checkbox"
              checked={includeLowercase}
              onChange={() => setIncludeLowercase(!includeLowercase)}
            />
          </label>
          <label className="flex flex-row justify-between items-center w-full px-4 h-[53px] bg-[#434343] rounded-lg">
            Include numbers
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
            />
          </label>
          <label className="flex flex-row justify-between items-center w-full px-4 bg-[#434343] rounded-lg h-[53px]">
            Include symbols
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={() => setIncludeSymbols(!includeSymbols)}
            />
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
            className="flex items-center justify-center w-[212px] bg-[#9DFF50] hover:bg-[#242424] text-[#262626] hover:text-[#fff] p-4 rounded-md text-sm hover:border-slate-400 transition duration-300 "
            onClick={generatePassword}
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
