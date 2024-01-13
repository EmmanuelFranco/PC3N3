import { useState } from "react";
import "./App.css";
import { ContainerApp } from "./components/container";
import { AmountApp } from "./components/amount";

function App() {
  const [value, setValue] = useState(0);
  const [numberPerson, setNumberPerson] = useState(1);
  const [tip, setTip] = useState(0);

  return (
    <div>
      <header>
        <img src="logo.svg" alt="logo" />
      </header>
      <div className="general-wrapper">
        <ContainerApp
          value={value}
          setValue={setValue}
          numberPerson={numberPerson}
          setNumberPerson={setNumberPerson}
          tip={tip}
          setTip={setTip}
        />
        <AmountApp
          value={value}
          numberPerson={numberPerson}
          tip={tip}
          setValue={setValue}
          setNumberPerson={setNumberPerson}
          setTip={setTip}
        />
      </div>
    </div>
  );
}

export default App;
