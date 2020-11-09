import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Cities.module.scss'

const Cities: React.FC<CitiesProps> = ({ cities }) => (
  <ul className={styles['city-list']}>
    {cities.map((city: City) => (
      <Link key={city.name} to={`/${city.name}`}>
        <li className={styles['city-name']}>{city.name}</li>
      </Link>
    ))}
  </ul>
)

export default Cities
