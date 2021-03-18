import axios from "axios";
import React, { useState } from "react";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false});
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      dateTime: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      icon: `Images/${response.data.weather[0].icon}.png`,
      humidity: response.data.main.humidity
    });
  }

  function search() {
    const apiKey = "4964201fe38c8af7f212aad270301c64"
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
    <div>
    <form id="search-form" onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          id="city-search"
          placeholder="Enter City Name"
          onChange={handleCityChange}
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
    <WeatherInfo data={weatherData} />
    </div>
  );
  } else {
    search();
    return "Loading...";
  }
}
