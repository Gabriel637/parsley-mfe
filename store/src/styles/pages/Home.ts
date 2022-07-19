import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const GridList = styled.div`
  display: grid;
  grid-template-columns: 320px 320px 320px 320px;
  justify-content: center;
  @media (max-width: 1024px) {
    grid-template-columns: 320px 320px;
  }
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 2559px) {
    display: flex;
    flex-direction: row;
  }
`
