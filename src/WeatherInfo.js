import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo text-center">
      <h1>
        <strong style={{ color: "white" }}>{props.data.city}</strong>
      </h1>

      <div className="mt-3">
        <div className="d-flex justify-content-center mb-3">
          <WeatherIcon code={props.data.icon} size={110} />
        </div>

        <div className="mb-3">
          <WeatherTemp celcius={props.data.temperature} unit={props.unit} />
        </div>

        <div className="flex-container mb-3" style={{ opacity: 0.5 }}>
          <FormattedDate date={props.data.date} />
          <span className="text-capitalize">{props.data.description}</span>
        </div>

        <div>
          <span style={{ opacity: 0.5 }}>Humidity:</span>{" "}
          <strong style={{ color: "white" }}>{props.data.humidity}%</strong> -{" "}
          <span style={{ opacity: 0.5 }}>Wind:</span>{" "}
          <strong style={{ color: "white" }}>{props.data.wind}Km/h</strong>
        </div>
      </div>
    </div>
  );
}
