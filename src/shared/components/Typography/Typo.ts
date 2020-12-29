import styled, { keyframes } from 'styled-components';
import { Link } from 'react-scroll';

import { color } from '../../app-config';
import backImg from '../../../assets/images/squiggle-h3.png';

const move = keyframes`
from {
  background-position: left bottom;
}
to {
  background-position: right bottom;
}
`;

export const Text1 = styled(Link)`
  font-family: inherit;
  color: ${color.primaryDark};
  text-decoration: none;
  background-image: url(${backImg});
  background-position: left bottom;
  background-size: auto 0.2em;
  background-repeat: repeat-x;
  animation: ${move} 5s linear infinite paused;
  transition: 0.2s cubic-bezier(0.25, 0.1, 0.25, 1);
  cursor: pointer;

  &:hover {
    animation-play-state: running !important;
  }
`;

export const Text2 = styled.p`
  font: inherit;
  color: ${color.secondaryLight};
  display: inline-block;
`;
