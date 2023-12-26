import React from "react";
import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lagos" />

        <footer className="creator">
          This project is created by{" "}
          <a
            href="https://www.instagram.com/mhiz_bisluv/"
            target="_blank"
            rel="noreferrer"
          >
            Akangbe Kafilat
          </a>{" "}
          and is {""}
          <a
            href="https://github.com/Bisluv/awesome-react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a> {" "}
          and{" "}
          <a 
          href="https://bisluv-awesome-react-weather-app.netlify.app/" 
          target="_blank"
          rel="noopener noreferrer" />
        </footer>
      </div>
    </div>
  );
}
