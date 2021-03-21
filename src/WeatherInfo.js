import React from "react";
import FormattedDate from "./FormattedDate";
import Temperature from "./Temperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
    <div className="card" id="current-weather">
      <div className="card-body">
        <h1 className="card-title" id="current-city">
          {props.data.city}
        </h1>
        <h2 className="card-subtitle mb-2 text-muted">
          <span id="current-date-time">
          <FormattedDate date={props.data.dateTime} />
          </span>
        </h2>
        <h2 className="current-condition" id="weather-condition">
          {props.data.description}
        </h2>
        <img
          className="icon"
          src={props.data.icon}
          alt={props.data.description}
          id="weather-icon"
        />
        <Temperature fahrenheit={props.data.temperature} />
        <p className="card-text">
          Humidity:{" "}
          <span className="humidity" id="current-humidity">
            {props.data.humidity}
          </span>
          %
          <br />
          Wind:{" "}
          <span className="wind" id="wind-speed">
            {Math.round(props.data.wind)}
          </span>{" "}
          mph
        </p>
      </div>
    </div>
    </div>
  );
}