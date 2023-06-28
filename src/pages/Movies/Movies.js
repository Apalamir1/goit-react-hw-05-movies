import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';

import { fetchMoviesbySearch } from '../../components/optionsAPI';

import toast, { Toaster } from 'react-hot-toast';

import {
  MovieSearchForm,
  MovieSearchButton,
  MovieSearchIcon,
  MovieSearchInput,
  MovieItem,
  Container,
  Decorate,
  Image,
  MovieLink,
} from './Movies.styled';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [formSubmitted, setFormSubmitted] = useState(false); // Додано новий стан

  const input = searchParams.get('input') ?? '';
  const [searchInput, setSearchInput] = useState(input ?? '');
  const location = useLocation();

  function updateInput(event) {
    setSearchInput(event.currentTarget.value);
    if (event.currentTarget.value === '') {
      setSearchParams({});
      setMovies([]);
    }
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (searchInput.trim() === '') {
      toast('Enter image name, please!', { icon: '🧐' });
      return;
    }

    setSearchParams({ input: searchInput });
    setFormSubmitted(true); // Встановлюємо значення true після сабміту форми
  }

  useEffect(() => {
    if (input === '') {
      return;
    }
    async function fetchMovies() {
      try {
        setLoading(true);

        const searchMovies = await fetchMoviesbySearch(input);
        console.log(searchMovies.results);
        setMovies(searchMovies.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovies();
  }, [input]);

  return (
    <Container>
      <MovieSearchForm onSubmit={handleFormSubmit}>
        <MovieSearchButton type="submit">
          <MovieSearchIcon />
        </MovieSearchButton>

        <MovieSearchInput
          name="input"
          value={searchInput}
          onChange={updateInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies..."
        />
      </MovieSearchForm>

      {!formSubmitted && ( // Додано перевірку на formSubmitted
        <>
          <Decorate>
            <p> </p>
          </Decorate>
        </>
      )}

      {!loading &&
        movies &&
        input !== '' &&
        formSubmitted && ( // Додано перевірку на formSubmitted
          <ul>
            {movies.map(movie => (
              <MovieItem key={movie.id}>
                <MovieLink to={`${movie.id}`} state={{ from: location }}>
                  {movie.poster_path ? (
                    <Image
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      alt={movie.title}
                    />
                  ) : (
                    <Image
                      src="https://upload.wikimedia.org/wikipedia/commons/4/43/Illustration_of_an_image.png"
                      alt={movie.title}
                    />
                  )}
                  <p>{movie.title}</p>
                </MovieLink>
              </MovieItem>
            ))}
          </ul>
        )}

      {loading && <Loader loading={loading} />}
      <Toaster position="top-right" />
    </Container>
  );
}
