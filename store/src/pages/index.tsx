import { useContext, useEffect, useState } from 'react'
import Head from 'next/head'
import api from '../utils/api'
import { OrderContext } from '../context/Order'

import * as Styled from '../styles/pages/Home'
import Card from '../Components/Card'
import { AxiosError, AxiosResponse } from 'axios'
import { IItem } from '../Interfaces'

const Home: React.FC = () => {
  const [items, setItems] = useState<Array<IItem>>([])
  const { add } = useContext(OrderContext)

  useEffect(() => {
    api
      .get('products')
      .then((response: AxiosResponse) => {
        setItems(response.data)
      })
      .catch((error: AxiosError) => {
        alert(error)
      })
  }, [])

  return (
    <Styled.Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <Styled.GridList>
        {items.map((item: IItem) => {
          return (
            <Card
              key={item.id}
              name={item.title}
              price={item.price}
              image={item.image}
              rate={item.rating.rate}
              handleAddToCart={() => add(item)}
            />
          )
        })}
      </Styled.GridList>
    </Styled.Container>
  )
}

export default Home
