import React from "react";
import "./flags.css";
import germany from "../../assets/Germany.svg";

function Country(props) {
  return (
    <div className="card">
      <img src={props.image} alt="" className="Germany" />
      <div className="descriptions">
        <h1 className="country">{props.countryname}</h1>
        <div className="features">
          <h1 className="population">Population :{props.population}</h1>
          <h1 className="region">Region : {props.region}</h1>
          <h1 className="capital">Capital : {props.capital}</h1>
        </div>
      </div>
    </div>
  );
}

export default Country;
