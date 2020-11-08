import { useParams } from 'react-router-dom'

const useCurrentCity = ({ cities }: { cities: Array<City> }) => {
  const params = useParams<{ city: string }>()

  const currentCity = cities.find(({ name }) => name === params.city)

  return currentCity
}

export default useCurrentCity
