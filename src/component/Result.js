import React from "react";
import "./Result.css";
const Result = props => {
  const {
    err,
    city,
    date,
    sunrise,
    sunset,
    wind,
    temp,
    pressure
  } = props.weather;
  let content = null;
  if (!err && city) {
    const sunriseTime = new Date(sunrise * 1000).toLocaleString();
    const sunsetTime = new Date(sunset * 1000).toLocaleString();
    content = (
      <>
        <h3>
          Results for city: <em>{city}</em>
        </h3>
        <h4>Data collected at: {date}</h4>
        <h4>Temperature: {temp}&#176;C</h4>
        <h4>Sunrise: {sunriseTime}</h4>
        <h4>Sunset: {sunsetTime}</h4>
        <h4>Wind spees: {wind}m/s</h4>
        <h4>Pressure: {pressure}hPa</h4>
      </>
    );
  }
  return (
    <div className="result">
      {err ? `City: ${city} doesn't exist in our database` : content}
    </div>
  );
};

export default Result;
