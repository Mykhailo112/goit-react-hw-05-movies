import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Form } from 'components/Form/Form';
import { FilmList } from 'components/FilmList/FilmList';
import { getSearchMovie } from 'components/API/api';
import { ErrorMsg } from './MoviesSearch.styled';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const currentQuery = searchParams.get('query');
    if (!currentQuery) return;

    const fetchMovieByQuery = async () => {
      try {
        setLoading(true);
        setError(false);
        const movieByQuery = await getSearchMovie(currentQuery);
        setMovies(movieByQuery);
      } catch (error) {
        setError(true);
      }
    };
    fetchMovieByQuery();
  }, [searchParams]);

  return (
    <>
      {error && !loading && (
        <ErrorMsg>❌ Something went wrong,try reload page</ErrorMsg>
      )}
      <Form setSearchParams={setSearchParams} />
      {movies.length > 0 && <FilmList movies={movies} />}
    </>
  );
};

export default Movies;
