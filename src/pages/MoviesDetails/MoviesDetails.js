import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'API/api';

export const MoviesDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');
  const location = useLocation();

  const backLink = location?.state?.from ?? '/movies';
  useEffect(() => {
    const fetchMovieById = async () => {
      try {
        const movieById = await getMovieDetails(movieId);
        setMovie(movieById);
      } catch (e) {
        console.log(e);
      }
    };
    fetchMovieById();
  }, [movieId]);

  return (
    <>
      <span>
        <Link to={backLink}>Go back</Link>
      </span>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
          alt={movie.original_title}
        />
        <div>
          <h2>{movie.original_title}</h2>
          <h3>Rating:{Math.round(movie.vote_average)}</h3>
          <h3>Rating:Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <ul>
            {movie.genres?.map(genre => (
              <li key={genre.id}>{genre.name} </li>
            ))}
          </ul>
        </div>
      </div>
      <h2>Additional Information</h2>
      <ul>
        <li>
          <Link to="cast" state={location.state}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={location.state}>
            Reviews
          </Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
