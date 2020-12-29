import React from 'react';
import styled from 'styled-components';
import { AiFillFacebook, AiFillGithub } from 'react-icons/ai';

import CurveSvg from '../../../assets/images/curve-up.svg';
import { color, breakpoint } from '../../app-config';
import { Text2 } from '../Typography/Typo';

const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.6rem;
  background: ${color.secondaryDark};

  @media screen and (max-width: ${breakpoint.desktop}) {
    font-size: 1.4;
  }

  @media screen and (max-width: ${breakpoint.laptop}) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: ${breakpoint.tablet}) {
    font-size: 1rem;
  }

  @media screen and (max-width: ${breakpoint.mobileSmall}) {
    font-size: 0.8rem;
  }
`;

const Wrap = styled.div`
  color: #fff;
  margin-top: 4em;
  margin-bottom: 8em;
`;

const Info = styled.h3`
  text-align: center;
  font-weight: 500;
  letter-spacing: 1px;
  margin-bottom: 4em;
`;

const Source = styled.h3`
  text-align: center;
  font-weight: 300;
  letter-spacing: 1px;
`;

const SourceLink = styled.a`
  color: #fff;
`;

const Curve = styled.div`
  align-self: stretch;
  background: white;
`;

const CurveImg = styled.img`
  width: 100%;
  margin-bottom: -10px;
`;

const Phone = styled.div`
  font-size: 2em;
`;

const Email = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 2em;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: rgba(255, 255, 255, 0.6);
  }
`;

const Contact = styled.div`
  display: flex;
  margin-top: 4rem;
  justify-content: center;
  font-size: 5rem;

  & > *:not(:last-child) {
    margin-right: 2rem;
  }

  & > * {
    transition: all 0.3s ease-in-out;
  }

  & > *:hover {
    color: ${color.primaryDark};
  }
`;

const LinkItem = styled.a`
  text-decoration: none;
  color: #fff;
  display: flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <FooterContainer id="footer">
      <Curve>
        <CurveImg src={CurveSvg} />
      </Curve>
      <Wrap>
        <Info>
          <Email href="mailto:cl.nhatminh@gmail.com">
            cl.nhatminh@gmail.com
          </Email>
          <Phone>0765.945.200</Phone>
          <Contact>
            <LinkItem
              target="_blank"
              rel="noopener noreferre"
              href="https://www.facebook.com/nhatminh.cl/"
            >
              <AiFillFacebook />
            </LinkItem>
            <LinkItem
              target="_blank"
              rel="noopener noreferre"
              href="https://github.com/Hnimod"
            >
              <AiFillGithub />
            </LinkItem>
            <LinkItem
              target="_blank"
              rel="noopener noreferre"
              href="https://drive.google.com/file/d/10byrKnIIIsl77CnXG8rWL03samqxvRJx/view"
            >
              CV
            </LinkItem>
          </Contact>
        </Info>
        <Source>
          Designed & built by <Text2>Do Nhat Minh</Text2>.{' '}
          <SourceLink
            target="_blank"
            rel="noopener noreferre"
            href="https://github.com/Hnimod/my-portfolio"
          >
            View source
          </SourceLink>
        </Source>
      </Wrap>
    </FooterContainer>
  );
};

export default Footer;
