import React, { useState } from "react";
import { Header, CitySelect, WeatherCard } from "./components/index";
// import Forecast from "./components/ForecastProps";
import "./assets/css/reset.css";
import "./assets/css/style.scss";

const App = () => {
  const [weather, setWeather] = useState([]);

  return (
    <div>
      <Header></Header>
      <CitySelect></CitySelect>
      <WeatherCard></WeatherCard>
    </div>
  );
};

export default App;
