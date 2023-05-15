import React, { useEffect } from "react";

import "./Header.scss";
const Header = ({ currentTheme, modeSwitcher, darkMode }) => {
  useEffect(() => {
    console.log("header");
  }, [darkMode]);
  return (
    <div className="header">
      <h3>Where in the World?</h3>
      <div className="dark_mode">
        {darkMode ? (
          <i
            className="fa-regular fa-moon"
            onClick={() => {
              modeSwitcher();
              currentTheme();
            }}
          ></i>
        ) : (
          <i
            className="fa-solid fa-moon"
            onClick={() => {
              modeSwitcher();
              currentTheme();
            }}
          ></i>
        )}

        <span>Dark Mode</span>
      </div>
    </div>
  );
};

export default Header;
