import React from 'react'
import './App.css'

import Map from 'components/Map/Map'
import useCoordinates from 'hooks/useCoordinates'

const App = () => {
  const { isLoading, latitude, longitude, onCoordinatesChange } = useCoordinates()

  if (isLoading) {
    return <p>Loading</p>
  }

  return (
    <>
      <Map latitude={latitude!} longitude={longitude!} onCoordinatesChange={onCoordinatesChange} />
    </>
  )
}

export default App
