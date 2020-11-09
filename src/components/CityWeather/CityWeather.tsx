import React from 'react'
import { Link, Redirect } from 'react-router-dom'

import Button from 'components/Button/Button'
import Weather from 'components/Weather/Weather'

import useCurrentCity from 'hooks/useCurrentCity'

import parseTimestampToDateString from 'utils/parseTimestampToDateString'

import styles from './CityWeather.module.scss'
import Wrapper from 'components/Wrapper/Wrapper'

const CityWeather: React.FC<CityWeatherProps> = ({ cities = [] }) => {
  const currentCity = useCurrentCity({ cities })

  if (!currentCity) {
    return <Redirect to='/' />
  }

  return (
    <>
      <Wrapper classNames={['start', 'full-width']}>
        <Link className={styles['close-link']} to='/'>
          <Button>Close</Button>
        </Link>
      </Wrapper>

      <Weather
        date={parseTimestampToDateString({ timestamp: currentCity.dt })}
        feelsLike={currentCity.main.feels_like}
        humidity={currentCity.main.humidity}
        maximumTemperature={currentCity.main.temp_max}
        minimumTemperature={currentCity.main.temp_min}
        name={currentCity.name}
        pressure={currentCity.main.pressure}
        temperature={currentCity.main.temp}
      />
    </>
  )
}

export default CityWeather
