import React from 'react';
import styled from 'styled-components';
import { breakpoint, color } from '../shared/app-config';
import Skill from '../shared/components/Skill/Skill';
import skill1 from '../assets/images/skills/html.svg';
import skill2 from '../assets/images/skills/sass.svg';
import skill3 from '../assets/images/skills/reactjs.svg';
import skill4 from '../assets/images/skills/nodejs.svg';
import skill5 from '../assets/images/skills/javascript.svg';
import skill6 from '../assets/images/skills/mongodb.svg';
import skill7 from '../assets/images/skills/typescript.svg';
import skill8 from '../assets/images/skills/git.svg';
import skill9 from '../assets/images/skills/webpack.svg';
import skill10 from '../assets/images/skills/github.svg';
import Title from '../shared/components/Title/Title';

interface SkillType {
  logo: string;
  name: string;
  percentage: number;
}

interface SkilsProps {
  id: string;
}

const skillSet: SkillType[] = [
  {
    logo: skill1,
    name: 'HTML/CSS',
    percentage: 90,
  },
  {
    logo: skill2,
    name: 'Sass',
    percentage: 90,
  },
  {
    logo: skill3,
    name: 'ReactJS',
    percentage: 70,
  },
  {
    logo: skill4,
    name: 'NodeJS',
    percentage: 60,
  },
  {
    logo: skill5,
    name: 'JavaScript',
    percentage: 70,
  },
  {
    logo: skill6,
    name: 'MongoDB',
    percentage: 60,
  },
  {
    logo: skill7,
    name: 'TypeScript',
    percentage: 70,
  },
  {
    logo: skill8,
    name: 'Git',
    percentage: 60,
  },
  {
    logo: skill9,
    name: 'Webpack',
    percentage: 50,
  },
  {
    logo: skill10,
    name: 'Github',
    percentage: 50,
  },
];

const Section = styled.section`
  font-size: 2rem;
  padding-bottom: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: ${breakpoint.desktop}) {
    padding: 0 5rem 20rem 5rem;
  }

  @media screen and (max-width: ${breakpoint.laptop}) {
    padding: 0 3rem 15rem 3rem;
    font-size: 1.8rem;
  }

  @media screen and (max-width: ${breakpoint.tablet}) {
    padding: 0 2rem 12rem 2rem;
    font-size: 1.6rem;
  }

  @media screen and (max-width: ${breakpoint.mobile}) {
    padding: 0 2rem 10rem 2rem;
    font-size: 1.6rem;
  }

  @media screen and (max-width: ${breakpoint.mobileSmall}) {
    padding: 0 1rem 8rem 1rem;
    font-size: 1.4rem;
  }
`;

const SkillSet = styled.ul`
  font-size: 1em;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3em;

  @media screen and (max-width: ${breakpoint.tablet}) {
    grid-template-columns: 1fr;
    grid-gap: 1.5em;
    & li:nth-child(5) {
      margin-bottom: 3em;
    }
  }
`;

const SectionTitle = styled.div`
  margin-bottom: 15rem;
  display: flex;
  justify-content: center;

  @media screen and (max-width: ${breakpoint.laptop}) {
    margin-bottom: 10rem;
  }

  @media screen and (max-width: ${breakpoint.tablet}) {
    margin-bottom: 4rem;
  }
`;

const Wrap = styled.div`
  max-width: 120rem;
  width: 100%;
`;

const SectionSkills: React.FC<SkilsProps> = (props) => {
  return (
    <Section id={props.id}>
      <Wrap>
        <SectionTitle>
          <Title weight={500} lineColor={color.primaryDark}>
            SKILL SET
          </Title>
        </SectionTitle>
        <SkillSet>
          {skillSet.map((skill) => (
            <Skill
              key={skill.name}
              id={skill.name.toLowerCase()}
              img={skill.logo}
              name={skill.name}
              percentage={skill.percentage}
            />
          ))}
        </SkillSet>
      </Wrap>
    </Section>
  );
};

export default SectionSkills;
