import React, { useState } from "react";
import citiesJson from "../cities.json";

type City = {
  code: string;
  name: string;
};
type Prefecture = {};
type Area = {
  name: string;
  prefectures: Prefecture[];
};
const areas: Area[] = citiesJson.areas;

const CitySelect: React.FC<{}> = () => {
  const [selectedAreaName, setSelectedAreaName] = useState("");
  const [selectedPrefectureName, setSelectedPrefectureName] = useState("");
  const selectedArea = areas.find((area) => area.name === selectedAreaName);
  const prefectures = selectedArea ? selectedArea.prefectures : [];
  const selectedPrefecture = prefectures.find(
    (pref) => pref.name === selectedPrefectureName
  );
  const cities = selectedPrefecture ? selectedPrefecture.cities : [];

  return (
    <div className="weather-select-wrap">
      <select className="weather-select" name="" id="">
        <option value="">地域を選択してください</option>
        <option value="">墨田区</option>
        <option value="">江東区</option>
        <option value="">台東区</option>
      </select>
    </div>
  );
};

export default CitySelect;
