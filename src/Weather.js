import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import SwitchSelector from "react-switch-selector";

export default function Weather() {
  const [unit, setUnit] = useState("celcius");
  const options = [
    {
      label: "ºC",
      value: "celcius",
      selectedBackgroundColor: "#9b9c9e",
    },
    {
      label: "ºF",
      value: "fahrenheit",
      selectedBackgroundColor: "#9b9c9e",
    },
  ];

  const onChange = (newValue) => {
    console.log(newValue);
    if (unit === "celcius") {
      setUnit("fahrenheit");
    } else {
      setUnit("celcius");
    }
  };

  const initialSelectedIndex = options.findIndex(
    ({ value }) => value === "celcius"
  );

  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState("Round Rock");
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      realFeal: response.data.main.feels_like,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      coordinates: response.data.coord,
    });
  }

  function search() {
    let ApiKey = "4b3503b2f08a729413c4d33ef1186004";
    let ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=metric`;
    axios.get(ApiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                autoFocus="on"
                className="form-control"
                onChange={updateCity}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
          <div className="d-flex justify-content-end mt-3">
            <div className="UnitSwitch" style={{ width: 90, height: 30 }}>
              <SwitchSelector
                onChange={onChange}
                options={options}
                initialSelectedIndex={initialSelectedIndex}
                backgroundColor={"#ffffff"}
                fontColor={"#000000"}
              />
            </div>
          </div>
        </form>

        <hr />

        <WeatherInfo data={weatherData} unit={unit} />
        <WeatherForecast coord={weatherData.coordinates} unit={unit} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
