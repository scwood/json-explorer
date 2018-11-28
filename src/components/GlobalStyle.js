import {createGlobalStyle} from 'styled-components'

import colors from '../colors'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body, html {
    margin: 0;
    padding: 0;
    line-height: 1.5;
    color: ${colors.darkestGray};
  }
`

export default GlobalStyle
