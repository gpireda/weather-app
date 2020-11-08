import React from 'react'
import './App.css'

import Map from 'components/Map/Map'

import useCities from 'hooks/useCities'
import useCoordinates from 'hooks/useCoordinates'
import client from 'utils/client'

const App = () => {
  const { isLoading, latitude, longitude, onCoordinatesChange } = useCoordinates()
  const { onCitiesChanged, onCitiesReset } = useCities()

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

      <button onClick={handleFetchCitiesButtonClick}>Search</button>
    </>
  )
}

export default App
