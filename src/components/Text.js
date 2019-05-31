import styled from 'styled-components';

import colors from '../colors';

const Text = styled.span`
  color: ${(props) => {
    let color;
    if (props.success) {
      color = colors.green;
    } else if (props.danger) {
      color = colors.red;
    } else if (props.warning) {
      color = colors.orange;
    } else if (props.info) {
      color = colors.blue;
    } else if (props.muted) {
      color = colors.gray;
    } else {
      color = colors.darkestGray;
    }
    return color;
  }};
  ${(props) => props.bold && 'font-weight: bold;'};
`;

export default Text;
