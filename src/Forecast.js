import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="forecast">
      <div className="row row-cols-6" id="hourly-forecast">
        <div className="col-2">
          <div className="next-hour">Placeholder</div>
          <img
            src="Images/02d.png"
            className="img-thumbnail"
            alt="weather-description"
          />
          <div className="temp">X°F</div>
        </div>
        <div className="col-2">
          <div className="next-hour">Placeholder</div>
          <img
            src="Images/02d.png"
            className="img-thumbnail"
            alt="weather-description"
          />
          <div className="temp">X°F</div>
        </div>
        <div className="col-2">
          <div className="next-hour">Placeholder</div>
          <img
            src="Images/02d.png"
            className="img-thumbnail"
            alt="weather-description"
          />
          <div className="temp">X°F</div>
        </div>
        <div className="col-2">
          <div className="next-hour">Placeholder</div>
          <img
            src="Images/02d.png"
            className="img-thumbnail"
            alt="weather-description"
          />
          <div className="temp">X°F</div>
        </div>
        <div className="col-2">
          <div className="next-hour">Placeholder</div>
          <img
            src="Images/02d.png"
            className="img-thumbnail"
            alt="weather-description"
          />
          <div className="temp">X°F</div>
        </div>
        <div className="col-2">
          <div className="next-hour">Placeholder</div>
          <img
            src="Images/02d.png"
            className="img-thumbnail"
            alt="weather-description"
          />
          <div className="temp">X°F</div>
        </div>
      </div>
    </div>
  );
}
