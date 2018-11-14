import styled from 'styled-components'

const CommaSeparated = styled.div`
  position: relative;
  &:not(:last-child):after {
    content: ',';
  }
`
export default CommaSeparated
