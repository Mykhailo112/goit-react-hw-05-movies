import { getTrendingMovies } from 'components/API/api';
import { useEffect, useState } from 'react';
import { FilmList } from 'components/FilmList/FilmList';
import { Title } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies('').then(setMovies);
  }, []);

  return (
    <>
      <Title>Tranding today</Title>
      <FilmList movies={movies} />
    </>
  );
};

export default Home;
