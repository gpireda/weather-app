import React from 'react'

import styles from './Weather.module.scss'

const Weather: React.FC<WeatherProps> = ({
  date,
  feelsLike,
  humidity,
  maximumTemperature,
  minimumTemperature,
  name,
  pressure,
  temperature,
}) => (
  <div className={styles.weather}>
    <h1 className={styles['city-name']}>{name}</h1>
    <p>Date: {date}</p>
    <p>Temperature: {Math.round(temperature)} ºC</p>
    <p>Maximum temperature: {Math.round(maximumTemperature)} ºC</p>
    <p>Minimum temperature: {Math.round(minimumTemperature)} ºC</p>
    <p>Feels like: {Math.round(feelsLike)} ºC</p>
    <p>Humidity: {humidity} %</p>
    <p>Pressure: {pressure} hPa</p>
  </div>
)

export default Weather
