import React from 'react'
import { Link } from 'react-router-dom'

const Cities: React.FC<CitiesProps> = ({ cities }) => (
  <ul>
    {cities.map((city: City) => (
      <Link key={city.name} to={`/${city.name}`}>
        <li>{city.name}</li>
      </Link>
    ))}
  </ul>
)

export default Cities
