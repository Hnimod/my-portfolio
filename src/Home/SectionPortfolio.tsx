import React from 'react';
import styled from 'styled-components';

import { breakpoint, color } from '../shared/app-config';
import Title from '../shared/components/Title/Title';
import Project from '../shared/components/Project/Project';

import myPortfolioDesk from '../assets/images/projects/my-portfolio-desk.png';
import myPortfolioMobile from '../assets/images/projects/my-portfolio-mobile.png';
import placesSharingDesk from '../assets/images/projects/places-sharing-desk.png';
import monomeDesk from '../assets/images/projects/monome-desk.png';
import monomeMobile from '../assets/images/projects/monome-mobile.png';
import dollaDesk from '../assets/images/projects/dolla-desk.png';
import dollaMobile from '../assets/images/projects/dolla-mobile.png';
import burgerBuilderDesk from '../assets/images/projects/burger-builder-desk.png';
import forkifyDesk from '../assets/images/projects/forkify-desk.png';
import omnifoodDesk from '../assets/images/projects/omnifood-desk.png';
import omnifoodMobile from '../assets/images/projects/omnifood-mobile.png';
import trilloDesk from '../assets/images/projects/trillo-desk.png';
import trilloMobile from '../assets/images/projects/trillo-mobile.png';
import nexterDesk from '../assets/images/projects/nexter-desk.png';
import nexterMobile from '../assets/images/projects/nexter-mobile.png';
import natoursDesk from '../assets/images/projects/natours-desk.png';
import natoursMobile from '../assets/images/projects/natours-mobile.png';
import blankDesk from '../assets/images/blank-laptop4.png';

const Section = styled.section`
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 15rem;
  padding: 15rem 0 15rem 0;
  background-image: linear-gradient(
    180deg,
    rgba(247, 247, 250, 0.86),
    rgba(246, 246, 247, 0)
  );

  @media screen and (max-width: ${breakpoint.desktop}) {
    padding: 12rem 4rem 12rem 4rem;
  }

  @media screen and (max-width: ${breakpoint.laptop}) {
    padding: 10rem 4rem 10rem 4rem;
    font-size: 1.8rem;
  }

  @media screen and (max-width: ${breakpoint.tablet}) {
    padding: 8rem 4rem 8rem 4rem;
    font-size: 1.6rem;
  }

  @media screen and (max-width: ${breakpoint.mobile}) {
    padding: 6rem 2rem 8rem 2rem;
    font-size: 1.6rem;
  }

  @media screen and (max-width: ${breakpoint.mobileSmall}) {
    font-size: 1.4rem;
  }
`;

const Container = styled.div`
  max-width: 120rem;
  width: 100%;
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

const projectList = [
  {
    name: 'My Portfolio',
    tags: ['ReactJS', 'TypeScript', 'CSS', 'HTML'],
    desc:
      'My portfolio landing page, fully responsive, built from scratch no template was used.',
    github: '',
    demo: '',
    desktopImg: myPortfolioDesk,
    mobileImg: myPortfolioMobile,
    background: `linear-gradient(108deg, ${color.secondaryDark} 0%, #404563 100%)`,
  },
  {
    name: 'Places Sharing',
    tags: ['MongoDB', 'Express', 'ReactJS', 'NodeJS', 'Google Map API'],
    desc:
      'A full-stack project using MERN. Allow users to signup and share their places, utilize Google Geocoding API to generate map with the location user entered. Support images upload from amazon S3.',
    github: 'https://github.com/Hnimod/placessharing-learning-mern',
    demo: 'https://mern-places-sharing.web.app/',
    desktopImg: placesSharingDesk,
    mobileImg: '',
    background: 'linear-gradient(108deg, #990033 0%, #be0a46 100%)',
  },
  {
    name: 'Monome',
    tags: ['ReactJS', 'CSS', 'HTML'],
    desc: 'A shallow copy of thecoffeehouse.com',
    github: 'https://github.com/Hnimod/monome-thecoffeehouse-clone',
    demo: 'https://monome-thecoffeehouse-clone.web.app/',
    desktopImg: monomeDesk,
    mobileImg: monomeMobile,
    background: 'linear-gradient(108deg,#1b1b1b 0%, #4e4c4c 100%)',
  },
  {
    name: 'Dolla',
    tags: ['ReactJS', 'CSS', 'HTML'],
    desc:
      'A Landing page suitable for online banking services, fully responsive and make easy to custom with config file',
    github: 'https://github.com/Hnimod/dolla-brian-design-youtube',
    demo: 'https://dolla-virtual-bank.web.app/',
    desktopImg: dollaDesk,
    mobileImg: dollaMobile,
    background:
      'linear-gradient(108deg, rgba(1, 147, 86, 1) 0%, rgba(10, 201, 122, 1) 100%)',
  },
  {
    name: 'Burger Builder',
    tags: ['ReactJS', 'Redux', 'Thunk', 'Saga'],
    desc:
      'A project focusing on core features of ReactJS library: Hooks, Custom Hooks, Redux, Thunk, Saga, HOC.',
    github: 'https://github.com/Hnimod/burgerbuilder-learning-reacjs',
    demo: 'https://react-my-burger-382c5.web.app',
    desktopImg: burgerBuilderDesk,
    mobileImg: '',
    background:
      'linear-gradient(108deg,rgba(112, 59, 9, 1) 0%, rgba(207, 143, 46, 1) 100%)',
  },
  {
    name: 'Forkify',
    tags: ['JavaScript', 'Sass'],
    desc:
      'A cooking recipes website using vanilla Javascript ES6 features, basic Webpack configuration, and Sass.',
    github: 'https://github.com/Hnimod/forkify-learning-es6',
    demo: 'https://forkify-me.web.app/',
    desktopImg: forkifyDesk,
    mobileImg: '',
    background: 'linear-gradient(108deg,#FBDB89 0%, #F48982 100%)',
  },
  {
    name: 'Omnifood',
    tags: ['CSS', 'HTML'],
    desc: 'CSS and HTML project. Fully responsive website.',
    github: 'https://github.com/Hnimod/omnifood-learning-csshtml',
    demo: 'https://omnifood-eeb6b.web.app/',
    desktopImg: omnifoodDesk,
    mobileImg: omnifoodMobile,
    background: 'linear-gradient(108deg,#1b1b1b 0%, #4e4c4c 100%)',
  },
  {
    name: 'Trillo',
    tags: ['CSS', 'HTML', 'Sass'],
    desc: 'CSS and HTML project with focusing on flex box. Responsive website.',
    github: 'https://github.com/Hnimod/trillo-learning-flexbox',
    demo: 'https://trillo-97f6e.web.app/',
    desktopImg: trilloDesk,
    mobileImg: trilloMobile,
    background: 'linear-gradient(108deg,#ba265d 0%, #ff3366 100%)',
  },
  {
    name: 'Nexter',
    tags: ['CSS', 'HTML', 'Sass'],
    desc:
      'CSS and HTML project with focusing on css grid. Fully responsive website.',
    github: 'https://github.com/Hnimod/nexter-learning-cssgrid',
    demo: 'https://nexter-5e681.web.app/',
    desktopImg: nexterDesk,
    mobileImg: nexterMobile,
    background: 'linear-gradient(108deg,#695236 0%, #c69963 100%)',
  },
  {
    name: 'Natours',
    tags: ['CSS', 'HTML', 'Sass'],
    desc:
      'Extensive CSS, HTML, sass project with modern looking, fully responsive for travelling website.',
    github: 'https://github.com/Hnimod/natours-learning-sass',
    demo: 'https://natours-2c17b.web.app/',
    desktopImg: natoursDesk,
    mobileImg: natoursMobile,
    background: 'linear-gradient(108deg,#28b485 0%, #55c57a 100%)',
  },
  {
    name: 'Natours Backend',
    tags: ['NodeJS', 'MongoDB'],
    desc:
      'Project that digs deep into NodeJS, Express, MongoDB, Mongoose. RESTful API supports CRUD operations, filtering, sorting, pagination, authentication, authorization ...',
    github: 'https://github.com/Hnimod/natours-learning-nodejs',
    demo: '',
    desktopImg: blankDesk,
    mobileImg: '',
    background: `linear-gradient(108deg, ${color.secondaryDark} 0%, #404563 100%)`,
  },
];

const Projects = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > *:not(:last-child) {
    margin-bottom: 10rem;

    @media screen and (max-width: ${breakpoint.desktop}) {
      margin-bottom: 8rem;
    }

    @media screen and (max-width: ${breakpoint.laptop}) {
      margin-bottom: 6rem;
    }

    @media screen and (max-width: ${breakpoint.tablet}) {
      margin-bottom: 4rem;
    }
  }
`;

interface PortfolioProps {
  id: string;
}

const SectionPortfolio: React.FC<PortfolioProps> = (props) => {
  return (
    <Section id={props.id}>
      <Container>
        <SectionTitle>
          <Title weight={500} lineColor={color.primaryDark}>
            PROJECTS
          </Title>
        </SectionTitle>

        <Projects>
          {projectList.map((prj) => (
            <Project
              key={prj.name}
              name={prj.name}
              tags={prj.tags}
              desc={prj.desc}
              github={prj.github}
              demo={prj.demo}
              desktopImg={prj.desktopImg}
              mobileImg={prj.mobileImg}
              backgroundColor={prj.background}
            />
          ))}
        </Projects>
      </Container>
    </Section>
  );
};

export default SectionPortfolio;
