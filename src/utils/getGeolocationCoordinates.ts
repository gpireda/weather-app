const defaultCoordinates = {
  latitude: 45,
  longitude: 45,
}

function getGeolocationCoordinates(onGeolocationResult: (params: GeographicalPoint) => void): void {
  navigator.geolocation.getCurrentPosition(
    ({ coords }) => onGeolocationResult({ latitude: coords.latitude, longitude: coords.longitude }),
    () =>
      onGeolocationResult({
        latitude: defaultCoordinates.latitude,
        longitude: defaultCoordinates.longitude,
      }),
  )
}

export default getGeolocationCoordinates
