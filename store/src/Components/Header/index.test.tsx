import React from 'react'
import { render } from '../../../_tests/utils'
import '@testing-library/jest-dom'
import Header from '.'

describe('Header', () => {
  it('renders header', () => {
    render(<Header />)
  })
})
