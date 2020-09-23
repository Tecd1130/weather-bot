import React, { useState, useCallback } from "react";
import { Header, CitySelect, WeatherCard } from "./components/index";
import { Forecast } from "./components/Forecast";
import "./assets/css/reset.css";
import "./assets/css/style.scss";

type Props = {
  forecast: Forecast;
};

const App: React.FC<Props> = () => {
  const [weather, setWeather] = useState([]);
  const [city, setCity] = useState("");
  const handleCity = useCallback(() => {
    setCity("test");
  }, [setCity]);
  return (
    <div>
      <div></div>
      <Header></Header>
      <CitySelect></CitySelect>
      <WeatherCard></WeatherCard>
    </div>
  );
};

export default App;
