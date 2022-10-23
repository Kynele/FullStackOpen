import React, { useState } from "react";
import Language from "./Language";
import axios from "axios";
import kelvinToCelsius from "../utils/kelvinToCelsius";
const Country = ({ props }) => {
  const [temperature, setTemperature] = useState(0);
  const [windSpeed, setWindSpeed] = useState(0);
  const [weatherIcon, setWeatherIcon] = useState("");
  const obj = props.languages;
  let language;
  const iconUrl = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
  const getResponse = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${props.capital[0]}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      );
      setTemperature(kelvinToCelsius(response.data.main.temp));
      setWindSpeed(response.data.wind.speed);
      setWeatherIcon(response.data.weather[0].icon);
    } catch (err) {
      console.log(err);
    }
  };
  getResponse();
  if (obj) {
    language = Object.values(props.languages);
  } else {
    language = [];
  }
  return (
    <div>
      <h1>{props.name.common}</h1>
      {props.capital === undefined ? (
        <div></div>
      ) : (
        <div>capital {props.capital[0]}</div>
      )}
      <div>area {props.area}</div>
      <h3>Languages:</h3>
      <ul>
        {language.map((whatLanguage) => {
          return (
            <Language key={whatLanguage} language={whatLanguage}></Language>
          );
        })}
      </ul>
      <div>
        <img src={props.flags.png} alt={`${props.capital[0]} flag`}></img>
      </div>
      <div>
        <h3>Weather in {props.capital[0]}</h3>
        <div>Temperature: {temperature} celsius</div>
        <div>
          <img src={iconUrl} alt="Weather icon"></img>
          {console.log(iconUrl)}
        </div>
        <div>Wind: {windSpeed} m/s</div>
      </div>
    </div>
  );
};
export default Country;
