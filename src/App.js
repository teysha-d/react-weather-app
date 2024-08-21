import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <h1>Weather App</h1>

        <footer>
          This project was coded by{" "}
          <a
            href="https://x.com/Teysha_D"
            target="_blank"
            rel="noopener noreferrer"
          >
            Teysha Darden
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/teysha-d/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://react-shecodes-weather-app.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
