import axios from 'axios';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDM1MjBlMmZlMzk5MjljOTA4OGFmNzg1YzcxMWY1OSIsInN1YiI6IjY0OTkzMmNhYmJkMGIwMDBhZGYxMzUxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.41RqzxpX4fIzZ0nIoO92sdGG4PVnsgxwTAeFRaUoj7U',
  },
};
const KEY = '543520e2fe39929c9088af785c711f59';

// Запит головна "Фільми дня"
export const fetchTrandinFilm = async () => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
    options
  );
  return response.data;
};

//запрос полной информации о фильме для страницы кинофильма.
export const fetchMovieDetails = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    options
  );
  return response.data;
};

// запрос информации о актёрском составе для страницы кинофильма.
export const fetchMovieCast = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
    options
  );
  return response.data;
};

// запрос обзоров для страницы кинофильма.
export const fetchMovieReviews = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`,
    options
  );
  return response.data;
};
export const fetchMoviesbySearch = async input => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/search/movie',
    {
      params: {
        query: input,
        api_key: KEY,
      },
    }
  );
  return response.data;
};
