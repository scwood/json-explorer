import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../colors';

const CopyButtonStyle = styled.span`
  color: ${colors.darkGray}
  position: absolute;
  top: .5rem;
  right: 1rem;
  font-size: 0.75rem;
  font-family: sans-serif;
  border-radius: 0.2rem;
  z-index: 9999;

  &:hover {
    cursor: pointer;
    color: ${colors.darkestGray}
  }
`;

const propTypes = {
  getText: PropTypes.func.isRequired,
};

function CopyButton({getText}) {
  const [wasClicked, setWasClicked] = useState(false);

  function handleClick() {
    setWasClicked(true);
    copyStringToClipboard(getText());
  }

  return (
    <CopyButtonStyle onClick={handleClick}>
      {wasClicked ? 'Copied' : 'Copy'}
    </CopyButtonStyle>
  );
}

function copyStringToClipboard(string) {
  const pre = document.createElement('pre');
  pre.setAttribute('type', 'hidden');
  pre.innerHTML = string;
  document.body.appendChild(pre);
  var range = document.createRange();
  range.selectNode(pre);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
  document.body.removeChild(pre);
}

CopyButton.propTypes = propTypes;

export default CopyButton;
