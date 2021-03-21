import React from "react";

export default function ForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours()
    return `${hours}:00`
  }

  function temperature() {
    let temperature = Math.round(props.data.main.temp)
    return `${temperature}°F`
  }

  function icon() {
     return  `Images/${props.data.weather[0].icon}.png`
  }

  return (
    <div className="col-2">
          <div className="next-hour">{hours()}</div>
          <img
            src={icon()}
            className="img-thumbnail"
            alt="weather-description"
          />
          <div className="temp">{temperature()}</div>
    </div>
  );
}