import React from 'react'
import { Route } from 'react-router-dom'

import Button from 'components/Button/Button'
import Cities from 'components/Cities/Cities'
import CityWeather from 'components/CityWeather/CityWeather'
import Layout from 'components/Layout/Layout'
import Map from 'components/Map/Map'

import useCities from 'hooks/useCities'
import useCoordinates from 'hooks/useCoordinates'

import client from 'utils/client'

const App = () => {
  const { isLoading, latitude, longitude, onCoordinatesChange } = useCoordinates()
  const { cities, onCitiesChanged, onCitiesReset } = useCities()

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

      <div style={{ display: 'flex' }}>
        <Route path='/'>
          <section style={{ width: '50%' }}>
            <Button onClick={handleFetchCitiesButtonClick}>Search</Button>

            {cities && <Cities cities={cities} />}
          </section>
        </Route>

        <Route path='/:city'>
          <section style={{ width: '50%' }}>
            <CityWeather cities={cities} />
          </section>
        </Route>
      </div>
    </Layout>
  )
}

export default App
