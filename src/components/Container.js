import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 100vh;
  box-sizing: border-box;
  padding: 10px;

  @media (orientation: landscape) {
    flex-direction: row;
  }

  @media (orientation: portrait) {
    flex-direction: column;
  }
`;

export default Container;
