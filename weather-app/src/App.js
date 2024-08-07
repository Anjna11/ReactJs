import axios from "axios";
import React, { useContext, useState } from "react";
import './App.css';

import sun_icon from "./Images/sun.png";
import cloudSun_icon from "./Images/cloudSun.png";
import Drizzle_icon from "./Images/Drizzle.png"; 
import Humidity_icon from "./Images/humidity.png"; 
import rain_icon from "./Images/rain.png";
import s_icon from "./Images/s.jpg";
import snow_icon from "./Images/snow.png";
import wind_icon from "./Images/wind.png";

function App(){

  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)
  const [inputcity, setinputcity] = useState("")
  const apiKEY = "176e4808c9008b8471e50c31f11934bd" 

  const getWeatherDeatils = (cityname) => {
    
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&appid=" + apiKEY

    setLoading(true)

    axios.get(apiURL).then((res) => {
      console.log("response", res)
      setData(res.data)
      setLoading(false)
    }).catch((err) => {
      console.log("err", err)
    })

  }

  const handleChangeInput = (e) => {
    setinputcity(e.target.value)
  }

  const handleSearch = () => {
    getWeatherDeatils(inputcity)
  }

  return (

    <div>
      <h1>Weather App</h1>
      
      {loading ? (
        <h3>Loading</h3>
      ) : (
        <h3></h3> 
      )}

      <div className='container'>
        <div className='top-bar'>
          <input type="text" placeholder="Search" value={inputcity} onChange={handleChangeInput}/>
            <div className='search-icon'>
              <img src={s_icon} onClick={handleSearch} />
            </div>
        </div>

        <div className='weather-image'>
          <img src={cloudSun_icon} />
        </div>

        <div className='weather-temp'>{((data?.main?.temp) - 273.15).toFixed(0)}°c</div>
        <div className='weather-location'>{data.name}</div>
        <div className="data-container">
          <div className="element">
            <img src={Humidity_icon} />
            <div className='data'>
              <div className="humidity-percent">{data?.main?.humidity}%</div>
              <div className="text">humidity</div>
            </div>
          </div>

          <div className="element">
            <img src={wind_icon}/>
            <div className='data'>
              <div className="humidity-percent">{data?.wind?.speed} km/h</div>
              <div className="text">Windspeed</div>
            </div>
          </div>
        </div>

      </div> 
    </div>
  ) 
}

export default App