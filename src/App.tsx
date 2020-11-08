import React from 'react'
import { Route } from 'react-router-dom'

import Button from 'components/Button/Button'
import Cities from 'components/Cities/Cities'
import CityWeather from 'components/CityWeather/CityWeather'
import Layout from 'components/Layout/Layout'
import Map from 'components/Map/Map'
import Section from 'components/Section/Section'
import Spinner from 'components/Spinner/Spinner'

import useCities from 'hooks/useCities'
import useCoordinates from 'hooks/useCoordinates'

import client from 'utils/client'

import styles from './App.module.scss'

const App = () => {
  const { isLoading, latitude, longitude, onCoordinatesChange } = useCoordinates()
  const { cities, isFetching, onCitiesChanged, onCitiesReset } = useCities()

  if (isLoading) {
    return <p>Loading</p>
  }

  function handleFetchCitiesButtonClick() {
    onCitiesReset()

    client.fetchCities({ latitude: latitude!, longitude: longitude! }).then(onCitiesChanged)
  }

  return (
    <Layout>
      <Map latitude={latitude!} longitude={longitude!} onCoordinatesChange={onCoordinatesChange} />

      <div className={styles.container}>
        <Route path='/'>
          <Section>
            <Button onClick={handleFetchCitiesButtonClick}>Search</Button>

            {isFetching && <Spinner />}

            {cities && <Cities cities={cities} />}
          </Section>
        </Route>

        <Route path='/:city'>
          <Section>
            <CityWeather cities={cities} />
          </Section>
        </Route>
      </div>
    </Layout>
  )
}

export default App
