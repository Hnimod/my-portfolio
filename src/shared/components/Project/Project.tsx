import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

import { AiFillGithub, AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { HiOutlineSwitchHorizontal } from 'react-icons/hi';
import { breakpoint, color } from '../../app-config';

interface ContainerProps {
  background: string;
}

const Container = styled.li<ContainerProps>`
  color: #fff;
  background: linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%),
    ${({ background }) => (background ? background : color.secondaryDark)};
  display: grid;
  grid-template-columns: minmax(350px, 1fr) 2fr;
  align-items: center;
  max-width: 110rem;
  width: 100%;
  height: 60rem;
  box-shadow: 0 5px 15px 6px rgba(7, 33, 66, 0.15);
  position: relative;

  @media screen and (max-width: ${breakpoint.laptop}) {
    height: 50rem;
    grid-template-columns: minmax(300px, 1fr) 2fr;
  }

  @media screen and (max-width: ${breakpoint.tablet}) {
    grid-template-columns: 1fr;
    height: max-content;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 4rem 0 4rem 4rem;

  @media screen and (max-width: ${breakpoint.laptop}) {
    padding-left: 2rem;
  }

  @media screen and (max-width: ${breakpoint.tablet}) {
    padding: 4rem;
  }

  @media screen and (max-width: ${breakpoint.mobile}) {
    padding: 4rem 2rem 4rem 2rem;
  }

  @media screen and (max-width: ${breakpoint.mobileSmall}) {
    padding: 2rem 1rem 2rem 1rem;
  }
`;

const ProjectImage = styled.div`
  display: flex;
  align-self: center;
  justify-self: center;
  padding: 4rem;
  width: 100%;

  @media screen and (max-width: ${breakpoint.desktop}) {
    padding-right: 2rem;
  }

  @media screen and (max-width: ${breakpoint.laptop}) {
    padding: 2rem;
    flex-direction: column;
  }

  @media screen and (max-width: ${breakpoint.tablet}) {
    padding: 1rem 1rem 15rem 1rem;
  }
`;

const Images = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media screen and (max-width: ${breakpoint.tablet}) {
    margin-top: 2rem;
  }
`;

interface ImgProps {
  isDesktop: boolean;
}

const DesktopImg = styled.img<ImgProps>`
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  transition: all 0.8s ease-in-out;
  z-index: ${({ isDesktop }) => (isDesktop ? '1' : '-1')};
  opacity: ${({ isDesktop }) => (isDesktop ? '1' : '0')};
  transform: ${({ isDesktop }) =>
    isDesktop ? 'translateX(0)' : 'translateX(100%)'};
`;

const MobileImg = styled.img<ImgProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  transition: all 0.3s ease-in-out;
  transition: all 0.8s ease-in-out;
  z-index: ${({ isDesktop }) => (isDesktop ? '-1' : '1')};
  opacity: ${({ isDesktop }) => (isDesktop ? '0' : '1')};
  transform: ${({ isDesktop }) =>
    isDesktop ? 'translate(-100%, -50%)' : 'translate(-50%, -50%)'};
`;

const SwitchBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  flex-grow: 0;

  @media screen and (max-width: ${breakpoint.laptop}) {
    margin-top: 2rem;
  }
`;

const bounceUp = keyframes`
 0% {
   transform: translateX(0);
  }
 50% {
  transform: translateX(10px);
  color: ${color.primaryDark}
 }
 100% {
  transform: translateX(0);
 }
`;

interface IconSwitchProps {
  mobile: string;
}

const IconSwitch = styled(HiOutlineSwitchHorizontal)<IconSwitchProps>`
  background: ${({ mobile }) =>
    mobile === '' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.8)'};
  border-radius: 50%;
  font-size: 4rem;
  padding: 1rem;
  color: ${color.secondaryDark};
  cursor: ${({ mobile }) => (mobile === '' ? 'not-allowed' : 'pointer')};
  animation: ${bounceUp} 2s ease-in-out infinite;
  ${({ mobile }) => (mobile === '' ? 'animation: none !important' : null)};

  &:hover {
    animation-play-state: paused;
  }
`;

const Name = styled.div`
  font-size: 4rem;
  font-weight: 700;
  letter-spacing: 2px;

  @media screen and (max-width: ${breakpoint.laptop}) {
    font-size: 3rem;
  }
`;

const Description = styled.p`
  flex: 1;
  font-size: 1.6rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.8);
  max-width: 40rem;

  @media screen and (max-width: ${breakpoint.laptop}) {
    font-size: 1.4rem;
  }
`;

const Tags = styled.ul`
  list-style: none;
  display: flex;
  font-size: 1.4rem;
  flex-wrap: wrap;
  font-weight: 700;
  margin-bottom: 4rem;

  & > * {
    margin: 0.3rem;
  }
`;

const Tag = styled.li`
  background: rgba(255, 255, 255, 0.1);
  padding: 0.5rem 1rem;
`;

const Buttons = styled.div`
  display: flex;

  @media screen and (max-width: ${breakpoint.tablet}) {
    position: absolute;
    bottom: 4rem;
    left: 50%;
    transform: translateX(-50%);
  }

  @media screen and (max-width: ${breakpoint.mobileSmall}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    bottom: 2rem;
  }
`;

const Source = styled.a`
  text-decoration: none;
  color: ${color.secondaryDark};
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.8);
  font-size: 1.8rem;
  padding: 1rem 2rem;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #fff;
  }

  @media screen and (max-width: ${breakpoint.mobile}) {
    font-size: 1.4rem;
  }
`;

const Github = styled(AiFillGithub)`
  margin-right: 1rem;
  font-size: 2.5rem;
`;

interface DemoProps {
  disable: string;
}

const Demo = styled.a<DemoProps>`
  text-decoration: none;
  color: ${({ disable }) => (disable === '' ? '#5f5f5f' : '#fff')};
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  font-size: 1.8rem;
  padding: 1rem 2rem;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
  cursor: ${({ disable }) => (disable === '' ? 'not-allowed' : 'pointer')};
  &:hover {
    ${({ disable }) => (disable === '' ? '' : `color: ${color.primaryDark}`)};
  }

  @media screen and (max-width: ${breakpoint.mobile}) {
    font-size: 1.4rem;
  }
`;

const Eye = styled(AiFillEye)`
  margin-right: 1rem;
  font-size: 2.5rem;
`;

const NoEye = styled(AiFillEyeInvisible)`
  margin-right: 1rem;
  font-size: 2.5rem;
`;

interface PrjProps {
  name: string;
  tags: string[];
  desc: string;
  github: string;
  demo: string;
  desktopImg: string;
  mobileImg: string;
  backgroundColor: string;
}

const Project: React.FC<PrjProps> = (props) => {
  const [isDesktopMode, setIsDesktopMode] = useState(true);

  const toggleDesktopMode = () => {
    setIsDesktopMode((prevState) => !prevState);
  };

  return (
    <Container background={props.backgroundColor}>
      <Info>
        <Name>{props.name}</Name>
        <Tags>
          {props.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>
        <Description>{props.desc}</Description>
        <Buttons>
          <Source target="_blank" rel="noopener noreferre" href={props.github}>
            <Github /> More images
          </Source>
          <Demo
            target="_blank"
            rel="noopener noreferre"
            href={props.demo}
            disable={props.demo}
          >
            {props.demo === '' ? <NoEye /> : <Eye />} Demo
          </Demo>
        </Buttons>
      </Info>

      <ProjectImage>
        <Images>
          <DesktopImg src={props.desktopImg} isDesktop={isDesktopMode} />
          {props.mobileImg && (
            <MobileImg src={props.mobileImg} isDesktop={isDesktopMode} />
          )}
        </Images>
        <SwitchBtn>
          <IconSwitch onClick={toggleDesktopMode} mobile={props.mobileImg} />
        </SwitchBtn>
      </ProjectImage>
    </Container>
  );
};

export default Project;
