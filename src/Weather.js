import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="card" id="current-weather">
      <div className="card-body">
        <h1 className="card-title" id="current-city">
          New York City
        </h1>
        <h2 className="card-subtitle mb-2 text-muted">
          <span id="current-date-time">Saturday 13:54</span>
        </h2>
        <h2 className="current-condition" id="weather-condition">
          Clear
        </h2>
        <img
          className="icon"
          src="Images/01d.png"
          alt="weather-icon"
          id="weather-icon"
        />
        <h3 className="card-subtitle mb-2 text-muted">
          <span className="temperature" id="current-temp">
            28
          </span>
          <span className="units">
            <span id="fahrenheit-link" className="active">
              °F
            </span>{" "}
            |
            <span id="celsius-link">
              °C
            </span>
          </span>
        </h3>
        <p className="card-text">
          Humidity:{" "}
          <span className="humidity" id="current-humidity">
            55
          </span>
          %
          <br />
          Wind:{" "}
          <span className="wind" id="wind-speed">
            7
          </span>{" "}
          mph
        </p>
      </div>
    </div>
  );
}
