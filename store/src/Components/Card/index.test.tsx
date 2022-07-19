import React from 'react'
import { render } from '../../../_tests/utils'
import '@testing-library/jest-dom'
import Card from '.'
import { screen } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'
import theme from '../../styles/theme'

describe('Card', () => {
  const item = {
    name: 'Title',
    price: 100,
    image: '',
    rate: 4,
    handleAddToCart: jest.fn()
  }

  test('Should render card with correct props', async () => {
    render(
      <Card
        name={item.name}
        price={item.price}
        image={item.image}
        rate={item.rate}
        handleAddToCart={item.handleAddToCart}
      />
    )
    const user = userEvent.setup()
    const name = screen.getByText(item.name)
    const price = screen.getByText(`$ ${item.price}`)
    const button = screen.getByRole('button')

    expect(name).toBeInTheDocument()
    expect(price).toBeInTheDocument()
    expect(button).toBeInTheDocument()

    expect(name).toHaveStyle({
      fontWeight: 'bold'
    })

    expect(price).toHaveStyle({
      color: theme.colors.primary,
      fontWeight: 'bold'
    })

    expect(button).toHaveStyle({
      background: 'transparent',
      color: theme.colors.primary,
      border: `solid ${theme.colors.secondary} 0.5px`
    })

    await user.click(button)
    expect(item.handleAddToCart).toHaveBeenCalledTimes(1)
  })
})
