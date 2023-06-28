import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ReactComponent as Logo } from '../../icons/film.svg';

import {
  Header,
  StyledLink,
  Container,
  Footer,
  LogoLink,
  Licence,
  TMDB,
  LinkContainer,
} from './Layout.styled';
export const Layout = () => {
  return (
    <Container>
      <Header>
        <LogoLink to="/">
          <Logo width={60} hanging={60}></Logo>
          Movie Database
        </LogoLink>

        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
      <Footer>
        <LinkContainer>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/movies">Movies</StyledLink>
          </li>
        </LinkContainer>
        <div>
          <Licence
            href="https://www.themoviedb.org"
            target="_blank"
            rel="noreferrer noopener"
          >
            <p>
              This product uses the TMDB API but is not endorsed or certified by
              TMDB.
            </p>
            <TMDB fill="#000" width={40} height={40}></TMDB>
          </Licence>
        </div>
      </Footer>
    </Container>
  );
};
