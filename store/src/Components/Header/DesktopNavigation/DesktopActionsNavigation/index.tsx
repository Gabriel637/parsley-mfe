import { motion, Variants } from 'framer-motion'
import { AiOutlineShopping, AiOutlineUser } from 'react-icons/ai'
import { useRouter } from 'next/router'
import { useContext } from 'react'

import * as Styled from './styles'

import { OrderContext } from '../../../../context/Order'

const actionMenuVariants: Variants = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  },
  hidden: {
    opacity: 0,
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1
    }
  }
}

const actionItemsVariants: Variants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 180,
      duration: 0.5
    }
  },
  hidden: {
    opacity: 0,
    scale: 0
  }
}
const DesktopActionsNavigation: React.FC = () => {
  const router = useRouter()
  const { cartItems } = useContext(OrderContext)

  return (
    <Styled.DesktopActionsMenu
      variants={actionMenuVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={actionItemsVariants}>
        <AiOutlineUser size="3.6rem" />
      </motion.div>
      <Styled.CartIcon
        style={{ position: 'relative' }}
        variants={actionItemsVariants}
        onClick={() => {
          router.push('/cart')
        }}
      >
        {cartItems && cartItems.length > 0 && (
          <Styled.Counter>{cartItems.length}</Styled.Counter>
        )}
        <AiOutlineShopping size="3.6rem" />
      </Styled.CartIcon>
    </Styled.DesktopActionsMenu>
  )
}

export default DesktopActionsNavigation
