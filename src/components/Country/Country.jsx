import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import "./Country.scss";
const Country = () => {
  const [country, setCountry] = useState([]);
  const [flag, setFlag] = useState();
  const [image, setImage] = useState();
  const [loading, setLoading] = useState(true);
  const { name } = useParams();
  useEffect(() => {
    async function fetchCountry() {
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${name}?fullText=true`
        );
        setCountry(response.data);
        // const navtive = Object.keys(response.data[0].name.nativeName)[0];
        setFlag(response.data[0].flags.svg);
      } catch (error) {
        console.error(error);
      }
    }
    fetchCountry();
    async function fetchFlag() {
      try {
        const response = await fetch(flag);
        const imageBlob = await response.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);
        console.log("fetch flag" + flag);
        setImage(imageObjectURL);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }
    setTimeout(() => {
      fetchFlag();
    }, 1000);
  }, [flag]);
  return (
    <div className="country">
      {loading ? (
        <div className="country__loading">Loading..</div>
      ) : (
        country.map((country) => {
          return (
            <div className="country__data">
              <Link to={"/"}>
                {" "}
                <button className="back__btn">Back</button>
              </Link>
              <img src={image} alt={country.name.official + " flag"} />
              {/* <div className="country__data--left">image</div> */}
              <div className="country__data--right">
                <h2>{country.name.official}</h2>
                <div className="country__details">
                  <div className="country__details--left">
                    <ul>
                      <li>
                        Navtive Name:{" "}
                        {
                          country.name.nativeName[
                            Object.keys(country.name.nativeName)[0]
                          ].official
                        }{" "}
                      </li>
                      <li>Population: {country.population} </li>
                      <li>Region: {country.region}</li>
                      <li>Sub Region: {country.subregion}</li>
                      <li>Capital: {country.capital}</li>
                    </ul>
                  </div>
                  <div className="country__details--right">
                    <ul>
                      <li>Top Level Domain: {country.tld} </li>
                      <li>
                        Currencies:
                        <span>
                          {" "}
                          {
                            country.currencies[
                              Object.keys(country.currencies)[0]
                            ].name
                          }{" "}
                        </span>
                      </li>
                      <li>
                        Language:{" "}
                        <span>
                          {" "}
                          {country.languages[Object.keys(country.languages)[0]]}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Country;
