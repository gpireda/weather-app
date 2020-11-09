import { useEffect, useState } from 'react'

import getGeolocationCoordinates from 'utils/getGeolocationCoordinates'

function useCoordinates() {
  const [lat, setLatitude] = useState<number>()
  const [lng, setLongitude] = useState<number>()

  useEffect(() => {
    getGeolocationCoordinates(handleCoordinatesChange)
  }, [])

  function handleCoordinatesChange({ lat, lng }: GeographicalPoint) {
    setLatitude(lat)
    setLongitude(lng)
  }

  return {
    isLoading: !lat || !lng,
    latitude: lat,
    longitude: lng,
    onCoordinatesChange: handleCoordinatesChange,
  }
}

export default useCoordinates
