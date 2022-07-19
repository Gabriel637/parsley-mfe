import { motion } from 'framer-motion'
import styled from 'styled-components'

export const DesktopActionsMenu = styled(motion.div)`
  display: flex;

  svg {
    cursor: pointer;
  }

  div + div {
    margin-left: 3.2rem;
  }

  @media screen and (max-width: 840px) {
    display: none;
  }
`

export const CartIcon = styled(motion.div)`
  position: relative;
`

export const Counter = styled.div`
  position: absolute;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.background};
  padding: 2px 6px;
  font-size: 12px;
  margin-left: 20px;
`
