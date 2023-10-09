import { getTrendingMovies } from 'API/api';
import { useEffect, useState } from 'react';
import { FilmList } from 'components/FilmList';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies('').then(setMovies);
  }, []);

  return (
    <>
      <h1>Tranding today</h1>
      <FilmList movies={movies} />
    </>
  );
};
