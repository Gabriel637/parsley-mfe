import { Theme } from './styled'
import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle<{ theme: Theme }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 16px Roboto, sans-serif;
  }

  html {
        font-size: 62.5%;
    }
    
    button {
        cursor: pointer;
    }

    body,
    input,
    textarea,
    select,
    button {    
        font-family: 'Roboto Condensed', sans-serif;
        font-weight: 400;
        font-size: 16px;
    }

    html,body, #root {
        height: 100%;
        overflow-x: hidden;
        @media screen and (max-width: 1200px) {
            height: auto;
        }

        @media screen and (max-width: 720px) {
            height: auto;
        }
    }
`
