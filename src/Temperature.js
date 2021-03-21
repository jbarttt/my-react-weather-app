import React, { useState } from "react";

export default function Temperature(props) {
const [unit, setUnit] = useState("fahrenheit");

function showCelsius(event) {
  event.preventDefault();
  setUnit("celsius");
}

function showFahrenheit(event) {
  event.preventDefault();
  setUnit("fahrenheit");
}

if (unit === "fahrenheit") {
  return (
      <h3 className="card-subtitle mb-2 text-muted">
          <span className="temperature" id="current-temp">
            {Math.round(props.fahrenheit)}
          </span>
          <span className="units">
            <span id="fahrenheit-link" className="active">
              °F
            </span>{" "}
            |
            <span id="celsius-link"><a href="/" onClick={showCelsius}>
              °C
            </a>
            </span>
          </span>
        </h3>
  );
  } else {
    let celsius = (props.fahrenheit - 32) * 5 / 9;
    return (
    <h3 className="card-subtitle mb-2 text-muted">
          <span className="temperature" id="current-temp">
            {Math.round(celsius)}
          </span>
          <span className="units">
            <span id="fahrenheit-link" className="active"><a href="/" onClick={showFahrenheit}>
              °F
            </a>
            </span>{" "}
            |
            <span id="celsius-link">
              °C
            </span>
          </span>
        </h3>
    );
  }
}