import React from 'react'
import { render, screen } from '@testing-library/react'

import Button from './Button'

const label = 'Button label'

it('renders as expected', () => {
  render(<Button>{label}</Button>)

  expect(screen.getByRole('button')).toBeInTheDocument()
})

it('has the expected label', () => {
  render(<Button>{label}</Button>)

  expect(screen.getByText(label)).toBeInTheDocument()
})
