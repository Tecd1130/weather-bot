import React, { useState, useEffect, useCallback } from "react";
import * as request from "superagent";
import { Header, CitySelect, WeatherCard } from "./components/index";

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
      <button onClick={handleClick}>テストです</button>
    </div>
  );
};

export default App;
