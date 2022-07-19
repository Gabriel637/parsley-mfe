import { Variants } from 'framer-motion'
import React from 'react'
import Logo from '../Logos'
import DesktopNavigation from './DesktopNavigation'
import MobileNavigation from './MobileNavigation'
import * as Styled from './styles'

const logoVariants: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 90
    }
  }
}
const Header: React.FC = () => {
  return (
    <Styled.Header>
      <Logo variants={logoVariants} />
      <DesktopNavigation />
      <MobileNavigation />
    </Styled.Header>
  )
}

export default Header
