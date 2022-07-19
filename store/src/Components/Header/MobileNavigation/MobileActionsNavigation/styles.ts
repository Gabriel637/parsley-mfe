import { motion } from 'framer-motion'
import styled from 'styled-components'

export const MobileActionsMenu = styled(motion.div)`
  position: absolute;
  top: 20px;
  right: 20px;

  display: flex;

  svg {
    cursor: pointer;
  }

  div + div {
    margin-left: 3.2rem;
  }
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
