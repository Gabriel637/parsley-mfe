import { motion, Variants } from 'framer-motion'
import { AiOutlineShopping, AiOutlineUser } from 'react-icons/ai'
import * as Styled from './styles'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { OrderContext } from '../../../../context/Order'

const actionMenuVariants: Variants = {
  open: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  },
  closed: {
    opacity: 0,
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1
    }
  }
}

const actionItemsVariants: Variants = {
  open: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 180,
      duration: 0.5
    }
  },
  closed: {
    opacity: 0,
    scale: 0
  }
}

const MobileActionsNavigation: React.FC = () => {
  const router = useRouter()
  const { cartItems } = useContext(OrderContext)

  return (
    <Styled.MobileActionsMenu variants={actionMenuVariants}>
      <motion.div variants={actionItemsVariants}>
        <AiOutlineUser size="3.6rem" />
      </motion.div>
      <motion.div
        variants={actionItemsVariants}
        onClick={() => {
          router.push('/cart')
        }}
      >
        {cartItems && cartItems.length > 0 && (
          <Styled.Counter>{cartItems.length}</Styled.Counter>
        )}
        <AiOutlineShopping size="3.6rem" />
      </motion.div>
    </Styled.MobileActionsMenu>
  )
}

export default MobileActionsNavigation
