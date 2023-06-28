import styled from '@emotion/styled';
import { NavLink, Link } from 'react-router-dom';
import { ReactComponent as logoTMDB } from '../../icons/tmdb.svg';

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 0;
  box-shadow: 0px 0px 7px 8px rgb(0, 0, 0);
  background-color: #ffffff;
  min-height: 100vh;
`;
export const LogoLink = styled(Link)`
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  color: black;
`;
export const Header = styled.header`
  background-color: rgb(255, 238, 1);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 15px 0;
  margin-bottom: 16px;
  border-bottom: 2px solid rgb(0, 0, 0);

  > nav {
    display: flex;
  }
`;

export const StyledLink = styled(NavLink)`
  margin-right: 10px;
  padding: 8px 16px;
  border-radius: 6px;
  text-decoration: none;
  color: black;
  font-weight: 700;
  font-size: 24px;
  font-family: Courier New, monospace;

  :hover,
  :focus {
    color: rgb(128, 128, 128);
  }

  &.active {
    color: white;
    background-color: rgb(0, 0, 0);
  }
`;

export const Footer = styled.footer`
  background-color: rgb(255, 238, 1);
  display: flex;
  align-content: flex-end;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 15px 0;
  margin-bottom: 16px;
  border-top: 2px solid rgb(0, 0, 0);
  > ul {
    display: flex;
    list-style: none;
  }
`;
export const Licence = styled.a`
  margin-right: 30px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-decoration: none;
  font-size: 10px;
  color: black;
`;
export const TMDB = styled(logoTMDB)`
  margin-left: 10px;
`;
