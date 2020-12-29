import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { AiFillGithub } from 'react-icons/ai';
import { animateScroll } from 'react-scroll';
import {
  Nav,
  NavItems,
  NavItem,
  NavLink,
  Contacts,
  ContactIcon,
  IconLink,
} from './NavbarElements';

const Navbar = () => {
  return (
    <Nav>
      <NavItems>
        <NavItem>
          <NavLink
            to="hero"
            spy={true}
            smooth={true}
            duration={500}
            offset={-60}
          >
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="info"
            spy={true}
            smooth={true}
            duration={500}
            offset={-60}
          >
            About
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
            offset={-60}
          >
            Skills
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="portfolio"
            spy={true}
            smooth={true}
            duration={500}
            offset={-60}
          >
            Portfolio
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="footer"
            spy={true}
            smooth={true}
            duration={500}
            offset={-60}
            onClick={() => animateScroll.scrollToBottom()}
          >
            Contact
          </NavLink>
        </NavItem>
      </NavItems>
      <Contacts>
        <ContactIcon>
          <IconLink href="mailto:cl.nhatminh@gmail.com">
            <HiOutlineMail />
          </IconLink>
        </ContactIcon>
        <ContactIcon>
          <IconLink
            target="_blank"
            rel="noopener noreferre"
            href="https://github.com/hnimod"
          >
            <AiFillGithub />
          </IconLink>
        </ContactIcon>
        <ContactIcon>
          <IconLink
            target="_blank"
            rel="noopener noreferre"
            href="https://drive.google.com/file/d/10byrKnIIIsl77CnXG8rWL03samqxvRJx/view?usp=sharing"
          >
            CV
          </IconLink>
        </ContactIcon>
      </Contacts>
    </Nav>
  );
};

export default Navbar;
