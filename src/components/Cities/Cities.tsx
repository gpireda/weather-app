import React from 'react'

const Cities: React.FC<CitiesProps> = ({ cities }) => (
  <ul>
    {cities.map((city: City) => (
      <li key={city.name}>{city.name}</li>
    ))}
  </ul>
)

export default Cities
