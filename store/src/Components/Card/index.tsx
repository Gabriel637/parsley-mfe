import { Variants } from 'framer-motion'
import { AiFillStar } from 'react-icons/ai'
import * as Styled from './styles'
interface CardProps {
  name: string
  price: number
  image: string
  handleAddToCart: () => void
  rate: number
}

const Card: React.FC<CardProps> = ({
  name,
  price,
  image,
  rate,
  handleAddToCart
}) => {
  const menuVariants: Variants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4
      }
    }
  }

  return (
    <Styled.Container
      variants={menuVariants}
      initial="hidden"
      animate="visible"
    >
      <Styled.ProductPic src={image} />
      <Styled.Name>{name.split(' ').slice(0, 3).join(' ')}</Styled.Name>
      <Styled.StarsContainer>
        {Array.from(Array(Math.round(rate)).keys()).map(key => {
          return <AiFillStar key={key} />
        })}
      </Styled.StarsContainer>
      <Styled.BoxFlex>
        <Styled.Price>$ {price}</Styled.Price>
        <Styled.Button onClick={handleAddToCart}>Buy</Styled.Button>
      </Styled.BoxFlex>
    </Styled.Container>
  )
}

export default Card
