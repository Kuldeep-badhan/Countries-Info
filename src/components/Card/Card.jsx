import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Card.scss";
const Card = ({ flag, population, capital, region, countryName }) => {
  const [image, setImage] = useState();
  useEffect(() => {
    async function fetchFlag() {
      const response = await fetch(flag);
      const imageBlob = await response.blob();
      const imageObjectURL = URL.createObjectURL(imageBlob);
      setImage(imageObjectURL);
    }
    fetchFlag();
  }, []);
  return (
    <Link to={`/country/${countryName}`}>
      <div className="card">
        <div className="card__flag">
          <img src={image} alt={countryName + "flag"} />
        </div>
        <div className="card__content">
          <h2>{countryName}</h2>
          <ul>
            <li>
              Population:{" "}
              <span className="country__card--details"> {population}</span>
            </li>
            <li>
              Region: <span className="country__card--details"> {region}</span>
            </li>
            <li>
              Capital:{" "}
              <span className="country__card--details"> {capital}</span>
            </li>
          </ul>
        </div>
      </div>
    </Link>
  );
};

export default Card;
