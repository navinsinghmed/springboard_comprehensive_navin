import React, { useState } from "react";
import axios from "axios";
import "./styles.css";
import tampabaystorm from "./assets/tampabaystorm.jpg";
import Register from "./Register";
import Login from "./Login";

//Todo: add login and registration via login and registration js files

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=e2e900051507e615d072de9b559bd34d`;

  const searchLocation = () => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  return (
    <div className="app">
      <div>
          <Login />
      </div>
      <div>
        <img
          src={tampabaystorm}
          alt="Storm over Tampa Bay"
          style={{ height: 200, width: 300 }}
        />
      </div>
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
        />
      </div>
      <div className="container">
        <div className="top">
          <h2>Tampa Bay Storm Chaser Weather Page!</h2>
          <p>
            This page allows you to type in a city and get the temperature, heat
            index or feels like temperature, humidity, and sky conditions for a
            given city.
            <br></br>
            Check out my youtube channel:
            <a
              href="https://www.youtube.com/channel/UCDsDUNjGaFV6j2jZE8VRb6Q"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tampa Bay Storm Chaser Navin Youtube Page!
            </a>
          </p>
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined && (
          <div className="bottom">
            <div className="feels">
              {data.main ? (
                <p className="bold">{data.main.feels_like.toFixed()}*F</p>
              ) : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? (
                <p className="bold">{data.wind.speed.toFixed()} MPH</p>
              ) : null}
              <p>Wind Speed</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;