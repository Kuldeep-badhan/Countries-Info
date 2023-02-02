import React, { useState } from "react";
import Countries from "../Countries/Countries";

import "./Home.scss";
const Home = () => {
  const [sendRegion, setSendRegion] = useState("asia");
  const [input, setInput] = useState();
  function getRegion(region) {
    setSendRegion(region);
  }

  return (
    <div className="home">
      <div className="search_region_components">
        <div className="search">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            placeholder="Search..."
            id="search"
            onChange={(e) => {
              setInput(e.target.value);
              console.log(e.target.value);
            }}
            autoComplete={"off"}
          />
        </div>
        <Regions getRegion={getRegion} />
      </div>
      <div className="home__countries">
        <Countries sendRegion={sendRegion} input={input} />
      </div>
    </div>
  );
};

const Regions = ({ getRegion }) => {
  const [region, setRegion] = useState("asia");
  getRegion(region);
  return (
    <div className="regions">
      <select id="regions" onChange={(e) => setRegion(e.target.value)}>
        <option value="asia" defaultValue={true}>
          Asia
        </option>
        <option value="america">Americas</option>
        <option value="africa">Africa</option>
        <option value="europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default Home;
