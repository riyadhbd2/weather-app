import React, { useEffect, useRef, useState } from "react";
import clear_icon from "../assets/clear.png";
import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";
import humidity_icon from "../assets/humidity.png";
import rain_icon from "../assets/rain.png";
import search_icon from "../assets/search.png";
import snow_icon from "../assets/snow.png";
import wind_icon from "../assets/wind.png";

const Weather = () => {

  const inputRef = useRef();

  const [weatherData, setWeatherData] = useState(false);

  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
  };

  const search = async (city) => {

    if (city === "") {
        alert("Enter City name");
        return;
    }

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_APP_ID
      }`;

      const response = await fetch(url);
      const data = await response.json();
      if (!response.ok) {
        alert(data.message);
        return;
      }
      console.log(data);
      const icon = allIcons[data.weather[0].icon] || clear_icon;
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      });
    } catch (error) {
        setWeatherData(false);
        console.error("Error in fecthing data");
    }
  };

  useEffect(() => {
    search("London");
  }, []);
  return (
    <div className="place-self-center p-10 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 items-center">
      <div className="flex items-center gap-3">
        <input
          ref={inputRef}
          className="h-10 border-none outline-0 rounded-full pl-6 text-[#626262] bg-[#ebfffc] font-medium  placeholder: p-1 "
          type="text"
          placeholder="Search"
        />
        <img
          onClick={() => search(inputRef.current.value)}
          className="w-9 p-2 rounded-full cursor-pointer bg-[#ebfffc]"
          src={search_icon}
          alt=""
        />
      </div>
      {
        weatherData ? <>
         <div className="grid items-center justify-center mt-5">
        <img className="w-28" src={weatherData.icon} alt="" />
        <div className="flex flex-col items-center justify-center mt-5">
          <p className="text-white text-3xl font-sm leading-7">
            {weatherData.temperature}
            <span className="text-3xl">°C</span>
          </p>
          <p className="text-white text-sm ">{weatherData.location}</p>
        </div>
      </div>
      <div className="w-full mt-10 text-white flex justify-between items-center">
        <div className="flex gap-3 text-sm">
          <img className="w-6 mt-1" src={humidity_icon} alt="" />
          <div>
            <p>{weatherData.humidity} %</p>
            <span>Humidity</span>
          </div>
        </div>
        <div className="flex gap-3 text-sm">
          <img src={wind_icon} alt="" />
          <div>
            <p>{weatherData.windSpeed} km/h</p>
            <span>Wind Speed</span>
          </div>
        </div>
      </div>
        </> : <></>
      }
     
    </div>
  );
};

export default Weather;
