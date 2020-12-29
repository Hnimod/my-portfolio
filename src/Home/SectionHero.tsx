import React from 'react';
import styled from 'styled-components';
import { breakpoint, color } from '../shared/app-config';
import { Text1, Text2 } from '../shared/components/Typography/Typo';

const Section = styled.section`
  background: ${color.secondaryDark};
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 4.1rem;
  z-index: 1;
  width: 100%;

  @media screen and (max-width: ${breakpoint.desktop}) {
    padding-left: 2rem;
  }

  @media screen and (max-width: ${breakpoint.laptop}) {
    font-size: 3.6rem;
  }

  @media screen and (max-width: ${breakpoint.tablet}) {
    font-size: 3.2rem;
  }

  @media screen and (max-width: ${breakpoint.mobile}) {
    font-size: 2.2rem;
  }

  @media screen and (max-width: ${breakpoint.mobileSmall}) {
    font-size: 1.8rem;
  }
`;

const Wrap = styled.div`
  color: ${color.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 140rem;
`;

const Title = styled.h1`
  width: 100%;
  font-family: 'Prompt';
  font-weight: 700;
  line-height: 1.2;
  margin: 15rem 0;

  @media screen and (max-width: ${breakpoint.desktop}) {
    & > span {
      display: none;
    }
  }
`;

interface HeroProps {
  id: string;
}

const SectionHero: React.FC<HeroProps> = (props) => {
  return (
    <Section id={props.id}>
      <Wrap>
        <Title>
          <Text2>Programmer</Text2>, <br /> a machine that turns{' '}
          <Text1 to="info" spy={true} smooth={true} duration={500} offset={-60}>
            coffee
          </Text1>{' '}
          into code.
          <span>
            <br />
          </span>{' '}
          i love coffee, ... and produce{' '}
          <Text1
            to="portfolio"
            spy={true}
            smooth={true}
            duration={500}
            offset={-60}
          >
            code
          </Text1>
          .
        </Title>
      </Wrap>
    </Section>
  );
};

export default SectionHero;
