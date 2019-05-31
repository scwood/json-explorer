import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import colors from '../colors';

const propTypes = {
  show: PropTypes.bool,
  onClick: PropTypes.func,
};

const ToggleStyle = styled.div`
  position: absolute;
  display: inline-block;
  left: -14px;
  color: ${colors.gray};
  &:hover {
    color: ${colors.darkGray};
    cursor: pointer;
  }
`;

function Toggle({show, onClick}) {
  return <ToggleStyle onClick={onClick}>{show ? '▾' : '▸'}</ToggleStyle>;
}

Toggle.propTypes = propTypes;

export default Toggle;
