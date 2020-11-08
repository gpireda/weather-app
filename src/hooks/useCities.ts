import { useState } from 'react'

function useCities() {
  const [cities, setCities] = useState<Array<City>>()

  function handleCitiesChanged({ list }: { list: Array<City> }) {
    setCities(list)
  }

  function resetCities() {
    setCities([])
  }

  return {
    cities,
    onCitiesChanged: handleCitiesChanged,
    onCitiesReset: resetCities,
  }
}

export default useCities
