import React, { Suspense } from 'react'
import { Link, Redirect } from 'react-router-dom'

import Spinner from 'components/Spinner/Spinner'

import useCurrentCity from 'hooks/useCurrentCity'

import parseTimestampToDateString from 'utils/parseTimestampToDateString'

import styles from './CityWeather.module.scss'

const Button = React.lazy(() => import('components/Button/Button'))
const Weather = React.lazy(() => import('components/Weather/Weather'))
const Wrapper = React.lazy(() => import('components/Wrapper/Wrapper'))

const CityWeather: React.FC<CityWeatherProps> = ({ cities = [] }) => {
  const currentCity = useCurrentCity({ cities })

  if (!currentCity) {
    return <Redirect to='/' />
  }

  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Wrapper classNames={['start', 'full-width']}>
          <Link className={styles['close-link']} to='/'>
            <Button>Close</Button>
          </Link>
        </Wrapper>
      </Suspense>

      <Suspense fallback={<Spinner />}>
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
      </Suspense>
    </>
  )
}

export default CityWeather
