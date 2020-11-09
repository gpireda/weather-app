const defaultCoordinates = {
  lat: 45,
  lng: 45,
}

function getGeolocationCoordinates(onGeolocationResult: (params: GeographicalPoint) => void): void {
  navigator.geolocation.getCurrentPosition(
    ({ coords }) => onGeolocationResult({ lat: coords.latitude, lng: coords.longitude }),
    () =>
      onGeolocationResult({
        lat: defaultCoordinates.lat,
        lng: defaultCoordinates.lng,
      }),
  )
}

export default getGeolocationCoordinates
