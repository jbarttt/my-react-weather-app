import axios from "axios";
import React, { useState } from "react";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false});

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      dateTime: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      icon: "Images/01d.png",
      humidity: response.data.main.humidity
    });
  }

  if (weatherData.ready) {
    return (
    <div>
    <form id="search-form">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          id="city-search"
          placeholder="Enter City Name"
        />
        <button
          className="btn btn-outline-secondary"
          type="submit"
          id="city-submit-button"
        >
          <i className="fas fa-search"></i>
        </button>
        <button className="btn btn-outline-secondary" id="current-location">
          <i className="fas fa-map-marker-alt"></i>
        </button>
      </div>
    </form>
    <div className="card" id="current-weather">
      <div className="card-body">
        <h1 className="card-title" id="current-city">
          {weatherData.city}
        </h1>
        <h2 className="card-subtitle mb-2 text-muted">
          <span id="current-date-time">
          <FormattedDate date={weatherData.dateTime} />
          </span>
        </h2>
        <h2 className="current-condition" id="weather-condition">
          {weatherData.description}
        </h2>
        <img
          className="icon"
          src={weatherData.icon}
          alt={weatherData.description}
          id="weather-icon"
        />
        <h3 className="card-subtitle mb-2 text-muted">
          <span className="temperature" id="current-temp">
            {Math.round(weatherData.temperature)}
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
            {weatherData.humidity}
          </span>
          %
          <br />
          Wind:{" "}
          <span className="wind" id="wind-speed">
            {Math.round(weatherData.wind)}
          </span>{" "}
          mph
        </p>
      </div>
    </div>
    </div>
  );
  } else {
    const apiKey = "4964201fe38c8af7f212aad270301c64"
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`

  axios.get(apiUrl).then(handleResponse);

  return "Loading...";
  }
}
