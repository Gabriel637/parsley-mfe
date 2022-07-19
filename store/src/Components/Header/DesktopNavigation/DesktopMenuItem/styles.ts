import { motion } from 'framer-motion'
import styled from 'styled-components'

export const MenuItem = styled(motion.div)`
  cursor: pointer;
  position: relative;

  display: inline-block;
  font-weight: 500;
  font-size: 2rem;
  padding: 1.6rem 3.2rem;
  color: ${props => props.theme.colors.text};

  :hover {
    color: ${props => props.theme.colors.primary};
  }
`
