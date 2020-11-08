import camelCase from 'camelcase-keys'

import { useState } from 'react'

function useCities() {
  const [cities, setCities] = useState<Array<City>>()

  function handleCitiesChanged({ list }: { list: Array<City> }) {
    setCities(camelCase(list))
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
