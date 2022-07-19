import React, { useContext } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import Header from '../Components/Header'
import OrderProvider, { OrderContext } from '../context/Order'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const { add } = useContext(OrderContext)
  const { remove } = useContext(OrderContext)
  const { cartItems } = useContext(OrderContext)

  return (
    <OrderProvider cartItems={cartItems} add={add} remove={remove}>
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </OrderProvider>
  )
}

export default MyApp
