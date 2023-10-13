import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Form } from 'components/Form/Form';
import { FilmList } from 'components/FilmList/FilmList';
import { getSearchMovie } from 'components/API/api';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const currentQuery = searchParams.get('query');
    if (!currentQuery) return;

    const fetchMovieByQuery = async () => {
      try {
        const movieByQuery = await getSearchMovie(currentQuery);
        setMovies(movieByQuery);
      } catch (e) {
        console.log(e);
      }
    };
    fetchMovieByQuery();
  }, [searchParams]);

  return (
    <>
      <Form setSearchParams={setSearchParams} />
      {movies.length > 0 && <FilmList movies={movies} />}
    </>
  );
};

export default Movies;
