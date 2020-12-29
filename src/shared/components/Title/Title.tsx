import React from 'react';
import { Container, Name } from './TitleElements';

interface TitleProps {
  lineColor?: string;
  textColor?: string;
  weight?: number;
  size?: string;
}

const Title: React.FC<TitleProps> = (props) => {
  return (
    <Container lineColor={props.lineColor}>
      <Name textColor={props.textColor} weight={props.weight} size={props.size}>
        {props.children}
      </Name>
    </Container>
  );
};

export default Title;
