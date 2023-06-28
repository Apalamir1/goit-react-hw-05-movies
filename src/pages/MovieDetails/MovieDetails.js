import { useState, useEffect, Suspense } from 'react';
import { fetchMovieDetails } from 'components/optionsAPI';
import { useLocation, useParams, Outlet } from 'react-router-dom';
import {
  BackLink,
  Container,
  Title,
  Image,
  MovieInfoContainer,
  Сriteria,
  Details,
  Average,
  LinkContainer,
  StyledLink,
} from './MovieDetails.styled';

export default function MoviesDetals() {
  const [movie, setMovie] = useState([]);

  const { moviesId } = useParams();

  const location = useLocation();

  const backPageLink = location.state?.from ?? '/';

  useEffect(() => {
    async function fetchDetails() {
      try {
        const movieDetails = await fetchMovieDetails(moviesId);
        setMovie(movieDetails);
        console.log(movieDetails);
      } catch (error) {
        console.log(error);
      }
    }
    fetchDetails();
  }, [moviesId]);
  const {
    poster_path,
    title,
    overview,
    genres,
    release_date,
    vote_average,
    // backdrop_path,
  } = movie;
  return (
    <>
      <BackLink to={backPageLink}>⇦ Back</BackLink>

      <Container>
        {/* <img
        src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
        alt={title}
      ></img> */}

        {poster_path ? (
          <Image
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title}
          />
        ) : (
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/4/43/Illustration_of_an_image.png"
            alt={title}
          />
        )}
        <MovieInfoContainer>
          <Title>
            {title} ({release_date && new Date(release_date).getFullYear()})
          </Title>
          <Details>
            User score: <Average> {Math.round(vote_average * 10)}%</Average>
          </Details>
          <Сriteria>Overview</Сriteria>
          <Details>{overview}</Details>
          <Сriteria>Geners</Сriteria>
          {genres && (
            <Details>{genres.map(genre => genre.name).join(' ')}</Details>
          )}
        </MovieInfoContainer>
      </Container>
      <LinkContainer>
        <StyledLink to="cast" state={{ from: backPageLink }}>
          Cast
        </StyledLink>
        <StyledLink to="reviews" state={{ from: backPageLink }}>
          Reviews
        </StyledLink>
      </LinkContainer>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
