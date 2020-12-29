import React, { useState } from 'react';
import Navbar from '../shared/components/Navbar/Navbar';
import Footer from '../shared/components/Footer/Footer';
import SectionHero from './SectionHero';
import SectionInfo from './SectionInfo';
import SectionSkills from './SectionSkills';
import SectionPortfolio from './SectionPortfolio';
import {
  Header,
  HomeContainer,
  Main,
  SidebarBtn,
  BarsIcon,
} from './HomeElements';
import Sidebar from '../shared/components/Sidebar/Sidebar';

const Home: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebarHandler = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <HomeContainer>
      <Header>
        <SidebarBtn>
          <BarsIcon onClick={toggleSidebarHandler} />
        </SidebarBtn>
        <Sidebar onClose={toggleSidebarHandler} isOpen={isSidebarOpen} />
        <Navbar />
      </Header>
      <Main>
        <SectionHero id="hero" />
        <SectionInfo id="info" />
        <SectionSkills id="skills" />
        <SectionPortfolio id="portfolio" />
      </Main>
      <Footer />
    </HomeContainer>
  );
};

export default Home;
