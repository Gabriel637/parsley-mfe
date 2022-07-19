import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 600px;
  justify-content: center;
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 2559px) {
    display: flex;
    flex-direction: row;
  }
`

export const ItemDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 20px;
`

export const ProductPic = styled.img`
  height: 100px;
  width: 100px;
  margin: 0 10px;
`

export const Info = styled.div`
  display: flex;
  p {
    text-transform: capitalize;
  }
`

export const Action = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`

export const Button = styled.button`
  background: transparent;
  color: ${props => props.theme.colors.danger};
  border-radius: 2px;
  transition: all 200ms ease-out;
  border: solid ${props => props.theme.colors.secondary} 0.5px;
  padding: 5px 20px;
  :hover {
    opacity: 0.8;
    border: solid ${props => props.theme.colors.danger} 1px;
    color: ${props => props.theme.colors.background};
    background: ${props => props.theme.colors.danger};
  }
`
