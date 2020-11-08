interface MapProps {
  defaultZoom?: number
  latitude: number
  longitude: number
  onCoordinatesChange: ({ latitude, longitude }: GeographicalPoint) => void
}
