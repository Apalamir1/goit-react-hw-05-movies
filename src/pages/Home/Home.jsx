import { useState, useEffect } from 'react';

import { fetchTrandinFilm } from '../../components/optionsAPI';

import { Title, MovieItem, Image, MovieLink, List } from './Home.styled';

export default function Home() {
  const [movies, setMovies] = useState([]);

  //----для трендовых фильмов----
  useEffect(() => {
    async function fetchTrending() {
      try {
        const trandinFilm = await fetchTrandinFilm();
        setMovies(trandinFilm.results);
        console.log(trandinFilm.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTrending();
  }, []);

  return (
    <>
      <Title>Trending today</Title>
      {movies && (
        <List>
          {movies.map(movie => (
            <MovieItem key={movie.id}>
              <MovieLink to={`/movies/${movie.id}`}>
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

                <p>
                  {movie.title}
                  {movie.name}
                </p>
              </MovieLink>
            </MovieItem>
          ))}
        </List>
      )}
    </>
  );
}
