import styled from 'styled-components'

import colors from '../colors'

const ResultContainer = styled.div`
  display: flex;
  flex: 2;
  overflow: scroll;
  font-family: monospace;
  font-size: 1em;
  background-color: ${colors.lightestGray};
  border-radius: 0.25em;
  margin: 10px;
  padding: 10px;
`

export default ResultContainer
