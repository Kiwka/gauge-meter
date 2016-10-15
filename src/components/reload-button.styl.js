import styled from 'styled-components';
import {COLORS} from '../constants/ui.constants.js';

const ReloadButton = styled.button `
  border: 3px solid black;
  background: white;
  margin-top: 60px;
  border-radius: 4px;
  font-size: 1.2em;
  padding: 2px 5px;
  &:hover {
    background: ${COLORS.main};
  }
`;

export default ReloadButton;
