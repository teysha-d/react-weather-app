import React from "react";
import "./WeatherTemp.css";

export default function WeatherTemp(props) {
  if (props.unit === "celcius") {
    return (
      <div className="WeatherTemp d-flex justify-content-center">
        <span className="temperature" style={{ fontWeight: "300" }}>
          {Math.round(props.celcius)}
        </span>
        <span className="unit" style={{ fontWeight: "normal" }}>
          {" "}
          ºC
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemp d-flex justify-content-center">
        <span className="temperature" style={{ fontWeight: "300" }}>
          {Math.round(props.celcius * 1.8 + 32)}
        </span>
        <span className="unit" style={{ fontWeight: "normal" }}>
          ºF
        </span>
      </div>
    );
  }
}
