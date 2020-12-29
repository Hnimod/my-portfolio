import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import { color, breakpoint } from '../../app-config';

export const Nav = styled.nav`
  font-size: inherit;
  color: ${color.white};
  background: ${color.secondaryDark};
  width: 100%;
  height: 100%;
  display: flex;
  transition: all 0.3s ease-in-out;

  @media screen and (max-width: ${breakpoint.tablet}) {
    display: none;
  }
`;

export const NavItems = styled.ul`
  list-style: none;
  font-size: 0.8em;
  display: flex;
  align-items: stretch;
  flex: 1;
`;

export const NavItem = styled.li`
  display: flex;
`;

export const NavLink = styled(LinkS)`
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  padding: 0 1em;
  display: flex;
  align-items: center;
  border-bottom: 4px solid transparent;

  &:hover,
  &:active {
    color: ${color.primaryDark};
  }

  &.active {
    border-bottom: 4px solid ${color.primaryDark};
  }
`;

export const Contacts = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  padding: 0 1em;
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
