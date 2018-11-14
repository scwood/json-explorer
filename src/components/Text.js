import styled from 'styled-components'

const Text = styled.span`
  color: ${(props) => {
    let color
    if (props.success) {
      color = 'green'
    } else if (props.danger) {
      color = 'firebrick'
    } else if (props.warning) {
      color = 'darkorange'
    } else if (props.info) {
      color = 'mediumblue'
    } else if (props.muted) {
      color = 'darkgray'
    } else {
      color = 'black'
    }
    return color
  }};
  ${(props) => props.bold && 'font-weight: bold;'};
`

export default Text
