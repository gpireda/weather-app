import React from 'react'
import { Link, Redirect } from 'react-router-dom'

import Weather from 'components/Weather/Weather'

import useCurrentCity from 'hooks/useCurrentCity'

const CityWeather: React.FC<CityWeatherProps> = ({ cities = [] }) => {
  const currentCity = useCurrentCity({ cities })

  if (!currentCity) {
    return <Redirect to='/' />
  }

  return (
    <section>
      <Link to='/'>Return</Link>

      <Weather
        feelsLike={currentCity.main.feels_like}
        humidity={currentCity.main.humidity}
        maximumTemperature={currentCity.main.temp_max}
        minimumTemperature={currentCity.main.temp_min}
        name={currentCity.name}
        pressure={currentCity.main.pressure}
        temperature={currentCity.main.temp}
      />
    </section>
  )
}

export default CityWeather
