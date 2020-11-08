import React from 'react'

const Weather: React.FC<WeatherProps> = ({
  feelsLike,
  humidity,
  maximumTemperature,
  minimumTemperature,
  name,
  pressure,
  temperature,
}) => (
  <>
    <p>{name}</p>
    <p>Temperature: {temperature}</p>
    <p>Humidity: {humidity}</p>
    <p>Pressure: {pressure}</p>
    <p>Pressure: {pressure}</p>
    <p>Temp max: {maximumTemperature}</p>
    <p>Temp min: {minimumTemperature}</p>
    <p>Feels like: {feelsLike}</p>
  </>
)

export default Weather
