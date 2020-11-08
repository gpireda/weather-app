import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'

import Button from 'components/Button/Button'
import Cities from 'components/Cities/Cities'
import Map from 'components/Map/Map'

import useCities from 'hooks/useCities'
import useCoordinates from 'hooks/useCoordinates'

import client from 'utils/client'
import CityWeather from 'components/CityWeather/CityWeather'

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
    <>
      <Map latitude={latitude!} longitude={longitude!} onCoordinatesChange={onCoordinatesChange} />

      <Switch>
        <Route path='/:city'>
          <CityWeather cities={cities} />
        </Route>

        <Route path='/'>
          <Button onClick={handleFetchCitiesButtonClick}>Search</Button>

          {cities && <Cities cities={cities} />}
        </Route>
      </Switch>
    </>
  )
}

export default App
