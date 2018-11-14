import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const propTypes = {
  show: PropTypes.boolean,
  onClick: PropTypes.function,
}

const ToggleStyle = styled.div`
  position: absolute;
  display: inline-block;
  left: -14px;
  color: silver;
  &:hover {
    color: gray;
    cursor: pointer;
  }
`

const Toggle = ({show, onClick}) => (
  <ToggleStyle onClick={onClick}>{show ? '▾' : '▸'}</ToggleStyle>
)

Toggle.propTypes = propTypes

export default Toggle
