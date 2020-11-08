import { ClickEventValue } from 'google-map-react'

interface MapProps {
  defaultZoom?: number
  latitude: number
  longitude: number
  onCoordinatesChange: ({ latitude, longitude }: ClickEventValue & GeographicalPoint) => void
}
