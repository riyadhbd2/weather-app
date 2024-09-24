import React from "react";
import clear_icon from "../assets/clear.png";
import humidity_icon from "../assets/humidity.png";
import search_icon from "../assets/search.png";
import wind_icon from "../assets/wind.png";

const Weather = () => {
  return (
    <div className="place-self-center p-10 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 items-center">
      <div className="flex items-center gap-3">
        <input
          className="h-10 border-none outline-0 rounded-full pl-6 text-[#626262] bg-[#ebfffc] font-medium  placeholder: p-1 "
          type="text"
          placeholder="Search"
        />
        <img
          className="w-9 p-2 rounded-full cursor-pointer bg-[#ebfffc]"
          src={search_icon}
          alt=""
        />
      </div>
      <div className="grid items-center justify-center mt-5">
        <img className="w-28" src={clear_icon} alt="" />
        <div className="flex flex-col items-center justify-center mt-5">
          <p className="text-white text-3xl font-sm leading-7">16°C</p>
          <p className="text-white text-xs ">London</p>
        </div>
      </div>
      <div className="w-full mt-10 text-white flex justify-between items-center">
        <div className="flex gap-3 text-sm">
          <img className="w-6 mt-1" src={humidity_icon} alt="" />
          <div>
            <p>91 %</p>
            <span>Humidity</span>
          </div>
        </div>
        <div className="flex gap-3 text-sm">
          <img src={wind_icon} alt="" />
          <div>
            <p>3.6 km/h</p>
            <span>Wind Speed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
