import React from "react";
import "./Search.css";

export default function Search() {
  return (
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
  );
}
