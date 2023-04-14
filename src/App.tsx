import { useState } from "react";
import toast from "react-hot-toast";
import "./App.css";

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

    // Toast is not options are selected
    // const errorToast = () => {
    //   if (
    //     !includeUppercase &&
    //     !includeLowercase &&
    //     !includeNumbers &&
    //     !includeSymbols
    //   ) {
    //     return <Toast error="Please select at least one option." />;
    //   }
    // };

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
    <div className="flex justify-center items-center h-[500px] w-[100%]">
      <div className="flex flex-col	justify-around gap-[10px] items-start">
        <h1>Password Generator</h1>
        <label>
          <input
            type="checkbox"
            checked={includeUppercase}
            onChange={() => setIncludeUppercase(!includeUppercase)}
          />
          Include uppercase
        </label>
        <label>
          <input
            type="checkbox"
            checked={includeLowercase}
            onChange={() => setIncludeLowercase(!includeLowercase)}
          />
          Include lowercase
        </label>
        <label>
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
          />
          Include numbers
        </label>
        <label>
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={() => setIncludeSymbols(!includeSymbols)}
          />
          Include symbols
        </label>
        <div>
          <label>Password length: {length}</label>
          <input
            type="range"
            min="5"
            max="32"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
          />
        </div>
        <button onClick={generatePassword}>Click to Generate</button>
        <p>{password}</p>
      </div>
    </div>
  );
}

export default App;
