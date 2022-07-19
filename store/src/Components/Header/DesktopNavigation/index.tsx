import { Variants } from 'framer-motion'
import { useRouter } from 'next/router'
import DesktopActionsNavigation from './DesktopActionsNavigation'
import DesktopMenuItem from './DesktopMenuItem'
import * as Styled from './styles'

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

const DesktopNavigation: React.FC = () => {
  const router = useRouter()

  return (
    <>
      <Styled.DesktopMenu
        variants={menuVariants}
        initial="hidden"
        animate="visible"
        onClick={() => {
          router.push('/')
        }}
      >
        <DesktopMenuItem>Home</DesktopMenuItem>
      </Styled.DesktopMenu>
      <DesktopActionsNavigation />
    </>
  )
}

export default DesktopNavigation
