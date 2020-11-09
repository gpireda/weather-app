import camelCase from 'camelcase-keys'

import { useState } from 'react'

import distinctBy from 'utils/distinctBy'

function useCities() {
  const [cities, setCities] = useState<Array<City>>()

  function handleCitiesChanged({ list }: { list: Array<City> }) {
    const distinctCities = distinctBy(list, 'name') as unknown
    setCities(camelCase(distinctCities as Array<City>))
  }

  function resetCities() {
    setCities([])
  }

  return {
    cities,
    isFetching: cities?.length === 0,
    onCitiesChanged: handleCitiesChanged,
    onCitiesReset: resetCities,
  }
}

export default useCities
