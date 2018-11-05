import styled from 'styled-components'

const Text = styled.span`
  color: ${(props) => {
    let color
    if (props.success) {
      color = 'green'
    } else if (props.danger) {
      color = 'firebrick'
    } else if (props.info) {
      color = 'mediumblue'
    }
    return color
  }};
`

export default Text
