import React from 'react'
import GoogleMapReact from 'google-map-react'

import Marker from 'components/Marker/Marker'

import styles from './Map.module.scss'

const Map: React.FC<MapProps> = ({
  defaultZoom = 11,
  latitude,
  longitude,
  onCoordinatesChange,
}) => (
  <div className={styles['map-wrapper']}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY ?? '' }}
      center={{ lat: latitude, lng: longitude }}
      defaultZoom={defaultZoom}
      onClick={onCoordinatesChange}
    >
      <Marker lat={latitude} lng={longitude} />
    </GoogleMapReact>
  </div>
)

export default Map
