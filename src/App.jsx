import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Country from "./components/Country/Country";
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState("app__light");
  const [darkMode, setDarkMode] = useState(false);

  function modeSwitcher() {
    localStorage.setItem("dark__mode",!darkMode)
    setDarkMode(!darkMode);
    console.log("inside mode swithcer");
  }
  function currentTheme() {
    if (darkMode) {
      setTheme("app__light");
    localStorage.setItem("theme", "app__light" );

      console.log("inside current theme l", theme);
    } else {
      setTheme("app__dark");
    localStorage.setItem("theme", "app__dark");

      console.log("inside current theme d", theme);
    }
  }
  useEffect(() => {
    console.log("app");
    const theme = localStorage.getItem("theme");
    const darkMode = localStorage.getItem("dark__mode");
    if(theme){
      setTheme(theme)
      setDarkMode(darkMode)
    }
  
  }, [theme]);
  return (
    <div className={`app ${theme}`}>
      <Router>
        <Header
          currentTheme={currentTheme}
          modeSwitcher={modeSwitcher}
          darkMode={darkMode}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:name" element={<Country />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
