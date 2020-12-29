import styled from 'styled-components';

interface ContainerProps {
  lineColor?: string;
}

interface NameProps {
  textColor?: string;
  size?: string;
  weight?: number;
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  width: max-content;

  &::after {
    position: absolute;
    content: '';
    display: block;
    width: 90%;
    height: 4px;
    transform: translateX(5%);
    border-bottom: 4px solid
      ${({ lineColor }) => (lineColor ? lineColor : '#000')};
  }
`;

export const Name = styled.h1<NameProps>`
  color: ${({ textColor }) => (textColor ? textColor : '#000')};
  text-transform: uppercase;
  font-size: ${({ size }) => (size ? size : '2em')};
  font-weight: ${({ weight }) => (weight ? +weight : 400)};
  letter-spacing: 3px;
`;
