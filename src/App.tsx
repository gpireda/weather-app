import React, { Suspense } from 'react'
import { Route } from 'react-router-dom'

import Layout from 'components/Layout/Layout'
import Map from 'components/Map/Map'
import Spinner from 'components/Spinner/Spinner'

import useCities from 'hooks/useCities'
import useCoordinates from 'hooks/useCoordinates'
import useViewport from 'hooks/useViewport'

import client from 'utils/client'

import styles from './App.module.scss'

const Button = React.lazy(() => import('components/Button/Button'))
const Cities = React.lazy(() => import('components/Cities/Cities'))
const CityWeather = React.lazy(() => import('components/CityWeather/CityWeather'))
// const Map = React.lazy(() => import('components/Map/Map'))
const Modal = React.lazy(() => import('components/Modal/Modal'))
const Section = React.lazy(() => import('components/Section/Section'))
const Wrapper = React.lazy(() => import('components/Wrapper/Wrapper'))

const App = () => {
  const { isMobile } = useViewport()
  const { isLoading, latitude, longitude, onCoordinatesChange } = useCoordinates()
  const { cities, isFetching, onCitiesChanged, onCitiesReset } = useCities()

  if (isLoading) {
    return <Spinner />
  }

  function handleFetchCitiesButtonClick() {
    onCitiesReset()

    client.fetchCities({ lat: latitude!, lng: longitude! }).then(onCitiesChanged)
  }

  function renderWeatherSection() {
    return (
      <Suspense fallback={<Spinner />}>
        <Section>
          <CityWeather cities={cities} />
        </Section>
      </Suspense>
    )
  }

  return (
    <Layout>
      <Suspense fallback={<Spinner />}>
        <Map
          latitude={latitude!}
          longitude={longitude!}
          onCoordinatesChange={onCoordinatesChange}
        />
      </Suspense>

      <div className={styles.container}>
        <Route path='/'>
          <Suspense fallback={<Spinner />}>
            <Section>
              <Wrapper classNames={['start', 'full-width']}>
                <Button disabled={isFetching} onClick={handleFetchCitiesButtonClick}>
                  Search
                </Button>
              </Wrapper>

              {isFetching && <Spinner height={40} />}

              <Suspense fallback={<Spinner />}>{cities && <Cities cities={cities} />}</Suspense>
            </Section>
          </Suspense>
        </Route>

        <Route path='/:city'>
          <Suspense fallback={<Spinner />}>
            {isMobile ? <Modal>{renderWeatherSection()}</Modal> : renderWeatherSection()}
          </Suspense>
        </Route>
      </div>
    </Layout>
  )
}

export default App
