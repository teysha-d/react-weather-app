import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />

        <hr />
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

export default App;
