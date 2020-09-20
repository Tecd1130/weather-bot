import React from "react";

const WeatherCard = () => {
  return (
    <div className="weather-wrap">
      <p className="weather">晴れ</p>
      <p className="temperature">23℃</p>
      <time className="datetime">2020-10-10 10:00</time>
    </div>
  );
};

export default WeatherCard;
