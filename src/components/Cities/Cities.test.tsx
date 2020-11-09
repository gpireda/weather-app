import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import Cities from './Cities'

const cities = [
  {
    id: 3451190,
    name: 'Rio de Janeiro',
    main: {
      temp: 26.82,
      feels_like: 30.16,
      temp_min: 25,
      temp_max: 28,
      pressure: 1013,
      humidity: 94,
    },
    dt: 1604945013,
  },
  {
    id: 3473640,
    name: 'Sao Cristovao',
    main: {
      temp: 27.1,
      feels_like: 30.96,
      temp_min: 25,
      temp_max: 29,
      pressure: 1014,
      humidity: 88,
    },
    dt: 1604941669,
  },
]

it('renders as expected', async () => {
  render(
    <MemoryRouter>
      <Cities cities={cities} />
    </MemoryRouter>,
  )

  expect(screen.getByRole('list')).toBeInTheDocument()
})

it('renders the expected amount of items', () => {
  render(
    <MemoryRouter>
      <Cities cities={cities} />
    </MemoryRouter>,
  )

  expect(screen.getAllByRole('listitem')).toHaveLength(cities.length)
})

it('items have the expected name', () => {
  render(
    <MemoryRouter>
      <Cities cities={cities} />
    </MemoryRouter>,
  )

  const itemNames = cities.map(({ name }) => name)

  itemNames.forEach(item => {
    expect(screen.getByText(item)).toBeInTheDocument()
  })
})
