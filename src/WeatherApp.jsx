import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelslike: 41,
    temp: 33,
    tempMin: 27.05,
    tempMax: 27.05,
    humidity: 46,
    weather: "haze",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };
       
  return (
    <div>
      <h2 style={{textAlign: "center"}}>
        Weather Application
      </h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
    </div>
  );
}
