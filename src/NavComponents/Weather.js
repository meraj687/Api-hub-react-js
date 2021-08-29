import React, { useState, useEffect } from 'react'
import '../NavComponents/Weather.css'
import {
  FaBeer,
  FaCity,
  FaSadCry,
  FaSadTear,
  FaTemperatureHigh,
  FaTemperatureLow,
} from 'react-icons/fa'

function Weather() {
  const [city, setCity] = useState(null)

  const [search, setSearch] = useState('Mumbai')
  const inputEvent = (e) => {
    setSearch(e.target.value)
  }
  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=35a9117dae7e5f9c21ff9e596bebfc11`
      )
      const response = await res.json()
      setCity(response.main)
    }
    fetchApi()
  }, [search])
  return (
    <div className='main_div'>
      <div className='center_div'>
        <h1>WEATHER API</h1>
        <br />
        <input
          type='search'
          name=''
          id=''
          value={search}
          onChange={inputEvent}
          style={{ color: 'black' }}
        />
        {!city ? (
          <p>
            {' '}
            <FaSadTear /> No Data Found
          </p>
        ) : (
          <>
            <h1>
              {' '}
              <FaCity /> {search}
            </h1>
            <h2 className='temp'>
              <FaTemperatureHigh /> : {city.temp} °C
            </h2>
            <h3 className='tempmin_max'>
              <FaTemperatureLow /> : {city.temp_min} °C | <FaTemperatureHigh />{' '}
              : {city.temp_max} °C
            </h3>
            <h3>Pressure : {city.pressure}</h3>
            <h3>Humidity : {city.humidity}</h3>
            <h3>Sea_level : {city.sea_level}</h3>
            <h3>Ground_level : {city.grnd_level}</h3>
          </>
        )}
      </div>
    </div>
  )
}

export default Weather
