import React from 'react';
import styled from 'styled-components';
import MyAvatar from '../assets/images/my-avatar-2.jpg';
import { color, breakpoint } from '../shared/app-config';
import Title from '../shared/components/Title/Title';

interface InfoProps {
  id: string;
}

const Section = styled.section`
  font-size: 2rem;
  color: ${color.secondaryDark};
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20rem 0;

  @media screen and (max-width: ${breakpoint.desktop}) {
    padding: 20rem 5rem;
  }

  @media screen and (max-width: ${breakpoint.laptop}) {
    padding: 15rem 3rem;
    font-size: 1.8rem;
  }

  @media screen and (max-width: ${breakpoint.tablet}) {
    padding: 12rem 2rem;
    font-size: 1.6rem;
  }

  @media screen and (max-width: ${breakpoint.mobile}) {
    padding: 10rem 2rem;
    font-size: 1.6rem;
  }

  @media screen and (max-width: ${breakpoint.mobileSmall}) {
    padding: 8rem 1rem;
    font-size: 1.4rem;
  }
`;

const Info = styled.div`
  max-width: 120rem;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: ${breakpoint.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const Description = styled.p`
  font-size: 1em;
  font-weight: 300;
  margin-bottom: 6rem;
  color: #828c96;
  text-align: justify;
`;

const DescTitle = styled.h3`
  font-size: 1.2em;
  margin-bottom: 2rem;
  font-weight: 500;
`;

const AvatarImg = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0px 63px 154px -20px rgba(7, 33, 66, 0.5);
`;

const MyImg = styled.img`
  width: 100%;
  height: 100%;
`;

const SectionTitle = styled.div`
  @media screen and (max-width: ${breakpoint.tablet}) {
    margin-bottom: 4rem;
    display: flex;
    justify-content: center;
  }
`;

const Introduction = styled.div``;

const SectionInfo: React.FC<InfoProps> = (props) => {
  return (
    <Section id={props.id}>
      <Info>
        <SectionTitle>
          <Title weight={500} lineColor={color.primaryDark}>
            ABOUT ME
          </Title>
        </SectionTitle>
        <Introduction>
          <DescTitle>
            Hello,
            <br />
            My name is Do Nhat Minh
          </DescTitle>
          <Description>
            I enjoy teaching computer doing amazing stuffs, I trained to work
            with JavaScript, TypeScript, ReactJS, CSS, HTML, NodeJS, Express and
            MongoDB, but I am always open to learn new things.
            <br />
            <br />
            Besides programming, I like playing badminton, barbeque party or
            play some League of Lengends with friends at the weekends.
          </Description>
          <AvatarImg>
            <MyImg src={MyAvatar} />
          </AvatarImg>
        </Introduction>
      </Info>
    </Section>
  );
};

export default SectionInfo;
