import React, { useState } from "react";
import { API_URL, API_KEY } from "../config";

// images
import searchIcon from "../assets/search.png";
import rainIcon from "../assets/rain.png";
import cloudsIcon from "../assets/clouds.png";
import clearIcon from "../assets/clear.png";
import drizzleIcon from "../assets/drizzle.png";
import mistIcon from "../assets/mist.png";
import humidityIcon from "../assets/humidity.png";
import windIcon from "../assets/wind.png";

function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const checkWeather = async () => {
    if (!city) return;
    try {
      const response = await fetch(`${API_URL}${city}&appid=${API_KEY}`);
      if (response.status === 404) {
        setError("Invalid city name");
        setWeather(null);
        return;
      }

      const data = await response.json();
      setWeather({
        name: data.name,
        temp: Math.round(data.main.temp),
        humidity: data.main.humidity,
        wind: data.wind.speed,
        main: data.weather[0].main,
      });
      setError("");
    } catch {
      setError("Something went wrong!");
      setWeather(null);
    }
  };

  const getWeatherIcon = () => {
    if (!weather) return rainIcon;
    switch (weather.main) {
      case "Clouds": return cloudsIcon;
      case "Clear": return clearIcon;
      case "Drizzle": return drizzleIcon;
      case "Rain": return rainIcon;
      case "Mist": return mistIcon;
      default: return rainIcon;
    }
  };

  return (
    <div className="card">
      <div className="search">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={checkWeather}>
          <img src={searchIcon} alt="search" />
        </button>
      </div>

      {error && (
        <div className="error">
          <p>{error}</p>
        </div>
      )}

      {weather && (
        <div className="weather">
          <img src={getWeatherIcon()} className="weather-icon" alt="weather" />
          <h1 className="temp">{weather.temp}°c</h1>
          <h2 className="city">{weather.name}</h2>

          <div className="details">
            <div className="col">
              <img src={humidityIcon} alt="humidity" />
              <div>
                <p className="humidity">{weather.humidity}%</p>
                <p>Humidity</p>
              </div>
            </div>
            <div className="col">
              <img src={windIcon} alt="wind" />
              <div>
                <p className="wind">{weather.wind} km/hr</p>
                <p>Wind speed</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
