import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import { color, breakpoint } from '../../app-config';

interface SkillProps {
  img: string;
  id: string;
  name: string;
  percentage: number;
}

interface SkillbarProps {
  percen: number;
  startAnimate: boolean;
}

const Container = styled.li`
  font-size: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const SkillImage = styled.div`
  margin-right: 1em;
  display: flex;
  align-items: center;
  flex: 0 0 10%;
`;

const Img = styled.img`
  width: 100%;
`;

const Info = styled.div`
  flex: 1 1 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
`;

const Description = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const SkillName = styled.h3`
  font-size: 1.2em;
  font-weight: 500;
  flex: 1;
  letter-spacing: 4px;

  @media screen and (max-width: ${breakpoint.tablet}) {
    font-size: 0.8em;
  }
`;

const Percentage = styled.h4`
  font-size: 1.2em;
  font-weight: 500;
  letter-spacing: 4px;
  & span {
    font-size: 80%;
  }

  @media screen and (max-width: ${breakpoint.tablet}) {
    font-size: 0.8em;
  }
`;

const SkillBar = styled.div<SkillbarProps>`
  background: #fff;
  border-radius: 10px;
  width: 100%;
  height: 14px;
  position: relative;
  box-shadow: 0 5px 15px 0 rgba(7, 33, 66, 0.15);

  &::after {
    position: absolute;
    display: block;
    content: '';
    top: 0;
    left: 0;
    border-radius: 10px;
    transition: all 1.5s cubic-bezier(0.15, 0.41, 0.32, 0.88);
    width: ${({ percen, startAnimate }) =>
      startAnimate ? `${percen}%` : '20%'};
    height: 14px;
    background-image: linear-gradient(
      to right,
      ${color.secondaryDark},
      ${color.secondaryDark} 42%,
      ${color.primaryDark}
    );
  }
`;

const Skill: React.FC<SkillProps> = (props) => {
  const [startAnimate, setStartAnimate] = useState(false);
  const { id, img, name, percentage } = props;

  const startAnimateHandler = useCallback(() => {
    const el = document.getElementById(id)!;
    const sideEl = document.getElementById('sidebar')!;
    const position = el.offsetTop - sideEl.offsetHeight + el.offsetHeight;

    if (window.scrollY > position) {
      setStartAnimate(true);
      window.removeEventListener('scroll', startAnimateHandler);
    }
  }, [id]);

  useEffect(() => {
    window.addEventListener('scroll', startAnimateHandler);
  }, [id, startAnimateHandler]);

  return (
    <Container id={id}>
      <SkillImage>
        <Img src={img} />
      </SkillImage>
      <Info>
        <Description>
          <SkillName>{name}</SkillName>
          <Percentage>
            {percentage}
            <span>%</span>
          </Percentage>
        </Description>
        <SkillBar percen={percentage} startAnimate={startAnimate}></SkillBar>
      </Info>
    </Container>
  );
};

export default Skill;
