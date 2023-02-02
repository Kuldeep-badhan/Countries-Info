import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./Countries.scss";
const Countries = ({ sendRegion, input }) => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log("countries", input);
  useEffect(() => {
    async function getCountries() {
      try {
        if (input) {
          const response = await axios.get(
            `https://restcountries.com/v3.1/name/${input}`
          );
          console.log(response.data);
          setCountries(response.data);
          setLoading(false);
        } else {
          const response = await axios.get(
            `https://restcountries.com/v3.1/region/${sendRegion}`
          );
          console.log(response.data);
          setCountries(response.data);
          setTimeout(() => {
            setLoading(false);
          }, 1000);
        }
      } catch (error) {
        console.error(error.message);
        setLoading(false);
      }
    }
    getCountries();
  }, [sendRegion, input]);

  return (
    <div className="countries">
      {loading ? (
        <div className="country__loading">Loading..</div>
      ) : (
        countries.map((country) => {
          return (
            <Card
              key={country.name.official}
              flag={country.flags.svg}
              population={country.population}
              capital={country.capital}
              region={country.region}
              countryName={country.name.official}
            />
          );
        })
      )}
    </div>
  );
};

export default Countries;
