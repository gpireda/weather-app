import React from 'react'

import styles from './Weather.module.scss'

const Weather: React.FC<WeatherProps> = ({
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
    <p>Temperature: {temperature}</p>
    <p>Humidity: {humidity}</p>
    <p>Pressure: {pressure}</p>
    <p>Pressure: {pressure}</p>
    <p>Maximum temperature: {maximumTemperature}</p>
    <p>Minimum temperature: {minimumTemperature}</p>
    <p>Feels like: {feelsLike}</p>
  </div>
)

export default Weather
