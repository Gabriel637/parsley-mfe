import { useContext, useEffect, useState } from 'react'
import Head from 'next/head'
import { OrderContext } from '../context/Order'

import * as Styled from '../styles/pages/Cart'
import { IItem } from '../Interfaces'

const Home: React.FC = () => {
  const { cartItems, remove } = useContext(OrderContext)

  return (
    <Styled.Container>
      <Head>
        <title>Cart</title>
      </Head>
      {cartItems.map((item: IItem) => {
        return (
          <Styled.ItemDiv key={item.id}>
            <Styled.Info>
              <Styled.ProductPic src={item.image} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.category}</p>
              </div>
            </Styled.Info>
            <Styled.Action>
              <h3>${item.price}</h3>
              <Styled.Button onClick={() => remove(item)}>Remove</Styled.Button>
            </Styled.Action>
          </Styled.ItemDiv>
        )
      })}
    </Styled.Container>
  )
}

export default Home
