import styled from 'styled-components';
import { color, breakpoint } from '../shared/app-config';
import { FaBars } from 'react-icons/fa';

export const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

export const Header = styled.header`
  background: ${color.secondaryDark};
  font-size: 2.5rem;
  width: 100%;
  height: 6rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  @media screen and (max-width: ${breakpoint.tablet}) {
    font-size: 1.9rem;
  }

  @media screen and (max-width: ${breakpoint.mobile}) {
    font-size: 1.7rem;
  }

  @media screen and (max-width: ${breakpoint.mobileSmall}) {
    font-size: 1.5rem;
  }
`;

export const SidebarBtn = styled.div`
  display: none;

  @media screen and (max-width: ${breakpoint.tablet}) {
    display: flex;
    align-items: center;
    height: 100%;
    padding-left: 2rem;
  }
`;

export const BarsIcon = styled(FaBars)`
  font-size: 3rem;
  cursor: pointer;
  color: #fff;
  transition: all 0.3 ease-in-out;

  &:hover {
    color: ${color.primaryDark};
  }
`;

export const Main = styled.main`
  width: 100%;
  margin-top: 6rem;
`;
