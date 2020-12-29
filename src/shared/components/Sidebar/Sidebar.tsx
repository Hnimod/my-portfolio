import React from 'react';
import styled from 'styled-components';
import { Link as LinkS, animateScroll } from 'react-scroll';
import { color } from '../../app-config';
import { HiOutlineMail } from 'react-icons/hi';
import { AiFillGithub } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';

interface ContainerProps {
  isOpen: boolean;
}
const Container = styled.aside<ContainerProps>`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 900;
  background: ${color.secondaryDark};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: inherit;

  transition: all 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

const CloseBtn = styled(MdClose)`
  color: #fff;
  position: absolute;
  top: 2rem;
  left: 2rem;
  font-size: 1.2em;
  cursor: pointer;

  &:hover {
    color: ${color.primaryDark};
  }
`;

const Nav = styled.nav`
  height: 80%;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavItems = styled.ul`
  list-style: none;
  font-size: 1.2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const NavItem = styled.li`
  display: flex;

  &:not(:last-child) {
    margin-bottom: 1.5em;
  }
`;

const NavLink = styled(LinkS)`
  cursor: pointer;
  font-weight: 300;
  transition: all 0.2s ease-in-out;
  display: flex;
  letter-spacing: 2px;
  align-items: center;
  border-bottom: 2px solid transparent;

  &:hover,
  &:active {
    color: ${color.primaryDark};
  }

  &.active {
    border-bottom: 2px solid ${color.primaryDark};
  }
`;

export const Contacts = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  padding: 0 1em;
  font-size: 1.5em;
`;

export const ContactIcon = styled.li`
  &:not(:last-child) {
    padding-right: 2em;
  }
`;

export const IconLink = styled.a`
  display: flex;
  align-items: center;
  font-size: inherit;
  text-decoration: none;
  color: ${color.white};
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${color.primaryDark};
  }
`;

interface SidebarProps {
  onClose: () => void;
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = (props) => {
  return (
    <Container isOpen={props.isOpen} id="sidebar">
      <CloseBtn onClick={props.onClose} />
      <Nav>
        <NavItems>
          <NavItem>
            <NavLink
              to="hero"
              spy={true}
              smooth={true}
              duration={500}
              offset={-60}
              onClick={props.onClose}
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
              onClick={props.onClose}
            >
              About Me
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="skills"
              spy={true}
              smooth={true}
              duration={500}
              offset={-60}
              onClick={props.onClose}
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
              onClick={props.onClose}
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
              onClick={() => {
                animateScroll.scrollToBottom();
                props.onClose();
              }}
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
        </Contacts>
      </Nav>
    </Container>
  );
};

export default Sidebar;
