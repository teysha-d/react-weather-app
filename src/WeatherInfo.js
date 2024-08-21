import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo text-center">
      <h1>{props.data.city}</h1>

      <div className="mt-3">
        <div className="d-flex justify-content-center mb-3">
          <WeatherIcon code={props.data.icon} size={110} />
        </div>

        <div className="mb-3">
          <WeatherTemp celcius={props.data.temperature} unit={props.unit} />
        </div>

        <div className="mb-3">
          <FormattedDate date={props.data.date} />
          <span className="text-capitalize">{props.data.description}</span>
        </div>

        <div>
          <strong>Humidity:</strong> {props.data.humidity}% -{" "}
          <strong>Wind:</strong> {props.data.wind} Km/h
        </div>
      </div>
    </div>
  );
}
