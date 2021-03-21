import React, { useState } from "react";
import axios from "axios";
import ForecastPreview from "./ForecastPreview"
import "./Forecast.css";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
    <div className="forecast">
      <div className="row row-cols-6" id="hourly-forecast">
      <ForecastPreview data={forecast.list[0]} />
      <ForecastPreview data={forecast.list[1]} />
      <ForecastPreview data={forecast.list[2]} />
      <ForecastPreview data={forecast.list[3]} />
      <ForecastPreview data={forecast.list[4]} />
      <ForecastPreview data={forecast.list[5]} />
      </div>
    </div>
    );
  } else {
    let apiKey = "4964201fe38c8af7f212aad270301c64";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=imperial`;
    axios.get(url).then(handleForecastResponse);

    return null;
  }
}
