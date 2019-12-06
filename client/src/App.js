import React from "react";
import { useDarkMode } from "./hooks/useDarkMode";
import "./App.css";
import DisplayData from "./components/DisplayData";

function App() {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <div className="App">
      <DisplayData toggleMode={toggleMode} darkMode={darkMode} />
    </div>
  );
}

export default App;
