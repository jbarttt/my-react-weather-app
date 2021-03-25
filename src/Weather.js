import axios from "axios";
import React, { useState } from "react";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";

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

    if (response.data.weather[0].icon === "01d") {
      document.body.style = 'background: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);'
    } else if (response.data.weather[0].icon === "01n") {
      document.body.style = 'background: linear-gradient(to right, #d7d2cc 0%, #304352 100%);'
    } else if (response.data.weather[0].icon === "02d") {
      document.body.style = 'background: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);'
    } else if (response.data.weather[0].icon === "02n") {
      document.body.style = 'background: linear-gradient(to right, #d7d2cc 0%, #304352 100%);'
    } else if (response.data.weather[0].icon === "03d") {
      document.body.style = 'background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);'
    } else if (response.data.weather[0].icon === "03n") {
      document.body.style = 'background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);'
    } else if (response.data.weather[0].icon === "04d") {
      document.body.style = 'background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);'
    } else if (response.data.weather[0].icon === "04n") {
      document.body.style = 'background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);'
    } else if (response.data.weather[0].icon === "09d") {
      document.body.style = 'background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);'
    } else if (response.data.weather[0].icon === "09n") {
      document.body.style = 'background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);'
    } else if (response.data.weather[0].icon === "10d") {
      document.body.style = 'background: linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%);'
    } else if (response.data.weather[0].icon === "10n") {
      document.body.style = 'background: linear-gradient(to right, #d7d2cc 0%, #304352 100%);'
    } else if (response.data.weather[0].icon === "11d") {
      document.body.style = 'background: linear-gradient(-180deg, rgba(255, 255, 255, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%);'
    } else if (response.data.weather[0].icon === "11n") {
      document.body.style = 'background: linear-gradient(-180deg, rgba(255, 255, 255, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%);'
    } else if (response.data.weather[0].icon === "13d") {
      document.body.style = 'background: linear-gradient(to top, #dfe9f3 0%, white 100%);'
    } else if (response.data.weather[0].icon === "13n") {
      document.body.style = 'background: linear-gradient(to top, #dfe9f3 0%, white 100%);'
    } else if (response.data.weather[0].icon === "50d") {
      document.body.style = 'background: linear-gradient(-180deg, rgba(255, 255, 255, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%);'
    } else if (response.data.weather[0].icon === "50n") {
      document.body.style = 'background: linear-gradient(-180deg, rgba(255, 255, 255, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%);'
    } else {
      document.body.style = 'background: #d6e0f0;'
    }
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

  function searchLocation(position) {
    const apiKey = "4964201fe38c8af7f212aad270301c64"
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }
  
  function getCurrentPosition(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
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
        <button className="btn btn-outline-secondary" id="current-location" onClick={getCurrentPosition}>
          <i className="fas fa-map-marker-alt"></i>
        </button>
      </div>
    </form>
    <WeatherInfo data={weatherData} />
    <Forecast city={weatherData.city} />
    </div>
  );
  } else {
    search();
    return "Loading...";
  }
}
