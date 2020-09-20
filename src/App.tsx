import React, { useState, useEffect, useCallback } from "react";
import * as request from "superagent";
import { Header, CitySelect, WeatherCard } from "./components/index";
import "./assets/css/reset.css";
import "./assets/css/style.scss";

const App = () => {
  const [test, setTest] = useState(false);

  const handleClick = () => {
    setTest(true);
    console.log(test);
  };

  return (
    <div>
      <Header></Header>
      <CitySelect></CitySelect>
      <WeatherCard></WeatherCard>
    </div>
  );
};

export default App;
