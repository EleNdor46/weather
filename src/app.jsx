import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Placeholder from "./placeholders";
const App = () => {
  const [location, setLocation] = useState();
  const [weatherInThisMoment, setWeatherInThisMoment] = useState();
  const [getLocation, setGetLocation] = useState();
  const [stautsImg, setStautsImg] = useState();
  const [status, setStatus] = useState();
  async function getPromise(location) {
    try {
      const apiURL = `http://api.weatherapi.com/v1/forecast.json?key=1d24c9b7a73a47e8b4a142813240705&q=${location}&days=1&aqi=no&alerts=no`;
      const response = await fetch(apiURL);
      const weather = await response.json();
      setLocation(weather.location.name);
      setWeatherInThisMoment(weather.current.temp_c);
      setStautsImg(weather.current.condition.icon);
      setStatus(weather.current.condition.text);
      return weather;
    } catch (err) {
      alert("Вы ввели неправильные данные");
    }
  }

  const handleClick = (location) => {
    getPromise(location);
  };

  return (
    <div className="d-flex justify-content-center align-items-center m-5">
      <Placeholder
        location={location}
        handleClick={handleClick}
        setGetLocation={setGetLocation}
        getLocation={getLocation}
        weatherInThisMoment={weatherInThisMoment}
        stautsImg={stautsImg}
        status={status}
      />
    </div>
  );
};
export default App;
