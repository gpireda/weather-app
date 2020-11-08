import { useEffect, useState } from 'react'

import getGeolocationCoordinates from 'utils/getGeolocationCoordinates'

function useCoordinates() {
  const [latitude, setLatitude] = useState<number>()
  const [longitude, setLongitude] = useState<number>()

  useEffect(() => {
    getGeolocationCoordinates(handleCoordinatesChange)
  }, [])

  function handleCoordinatesChange({ latitude, longitude }: GeographicalPoint): void {
    setLatitude(latitude)
    setLongitude(longitude)
  }

  return {
    isLoading: !latitude || !longitude,
    latitude,
    longitude,
    onCoordinatesChange: handleCoordinatesChange,
  }
}

export default useCoordinates
