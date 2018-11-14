import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body, html {
    margin: 0;
    padding: 0;
    line-height: 1.5;
  }
`

export default GlobalStyle
