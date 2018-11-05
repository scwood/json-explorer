import styled from 'styled-components'

const CommaSeparated = styled.div`
  &:not(:last-child):after {
    content: ',';
  }
`
export default CommaSeparated
