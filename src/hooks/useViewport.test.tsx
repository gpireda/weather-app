import React from 'react'
import { render, screen } from '@testing-library/react'

import useViewport from './useViewport'

const Component = () => {
  const { isMobile } = useViewport()

  return <p>{isMobile ? 'Mobile' : 'Desktop'}</p>
}

it('returns expected value for mobile', () => {
  global.innerWidth = 375
  render(<Component />)

  expect(screen.getByText('Mobile')).toBeInTheDocument()
})

it('returns expected value for desktop', () => {
  global.innerWidth = 1200
  render(<Component />)

  expect(screen.getByText('Desktop')).toBeInTheDocument()
})
