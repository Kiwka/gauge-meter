import styled from 'styled-components';

const GaugeMeterHolder = styled.div`
  width: 450px;
  height: 204px;
  margin: 0 auto;

  .meter {
    transform: rotateX(180deg);
    width: 100%;
    height: 100%;
  }

  .needle {
    transform: rotate(0deg);
    transition: all 4s ease-in-out;
    transform-origin: 100% 0%;
  }
`;

export default GaugeMeterHolder;
