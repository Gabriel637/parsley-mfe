import { motion } from 'framer-motion'
import styled from 'styled-components'

export const DesktopMenu = styled(motion.nav)`
  text-transform: uppercase;

  @media screen and (max-width: 840px) {
    display: none;
  }
`
