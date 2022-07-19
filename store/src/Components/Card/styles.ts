import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled(motion.div)`
  margin: 25px;
  padding: 20px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ProductPic = styled.img`
  display: flex;
  justify-self: flex-end;
  height: 150px;
  width: 150px;
  border-radius: 5px;
  align-self: center;
  background-color: ${props => props.theme.colors.background};
`

export const Name = styled.h3`
  text-align: left;
  white-space: nowrap;
`

export const BoxFlex = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Price = styled.h3`
  color: ${props => props.theme.colors.primary};
`

export const Button = styled.button`
  background: transparent;
  color: ${props => props.theme.colors.primary};
  border-radius: 2px;
  transition: all 200ms ease-out;
  border: solid ${props => props.theme.colors.secondary} 0.5px;
  padding: 5px 20px;
  margin: 0 5px;
  :hover {
    opacity: 0.8;
    border: solid ${props => props.theme.colors.primary} 1px;
    color: ${props => props.theme.colors.background};
    background: ${props => props.theme.colors.primary};
  }
`

export const StarsContainer = styled.div`
  display: flex;
  color: ${props => props.theme.colors.primary};
`
