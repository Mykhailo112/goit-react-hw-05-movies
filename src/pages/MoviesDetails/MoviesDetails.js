import { Suspense, useEffect, useState, useRef } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'components/API/api';
import { PosterURL, Pleceholder } from 'components/Image/image';
import { Loader } from 'components/Loader/Loader';
import {
  MainDiv,
  Poster,
  BackLink,
  InformationDiv,
  OverviewText,
  DetailsDiv,
  InformationText,
  InformationList,
  InformationItem,
  ErrorMsg,
} from './MoviesDetails.styled';

export const MoviesDetails = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');
  const location = useLocation();

  const backLink = useRef(location.state?.from ?? '/movies');
  useEffect(() => {
    const fetchMovieById = async () => {
      try {
        setLoading(true);
        setError(false);
        const movieById = await getMovieDetails(movieId);
        setMovie(movieById);
      } catch (error) {
        setError(true);
      }
    };
    fetchMovieById();
  }, [movieId]);

  return (
    <MainDiv>
      <BackLink>
        <Link to={backLink.current}>Go back</Link>
      </BackLink>
      {error && !loading && (
        <ErrorMsg>❌ Something went wrong,try reload page</ErrorMsg>
      )}
      <InformationDiv>
        <Poster
          src={`${
            movie.poster_path
              ? PosterURL + movie.poster_path
              : Pleceholder + '?text=' + movie.original_title
          }`}
          alt={movie.original_title}
        />
        <DetailsDiv>
          <h2>{movie.original_title}</h2>
          <h3>Rating:{Math.round(movie.vote_average)}</h3>
          <h3>Overview</h3>
          <OverviewText>{movie.overview}</OverviewText>
          <h3>Genres</h3>
          <ul>
            {movie.genres?.map(genre => (
              <li key={genre.id}>{genre.name} </li>
            ))}
          </ul>
        </DetailsDiv>
      </InformationDiv>
      <InformationText>Additional Information</InformationText>
      <InformationList>
        <InformationItem>
          <Link to="cast">Cast</Link>
        </InformationItem>
        <InformationItem>
          <Link to="reviews">Reviews</Link>
        </InformationItem>
      </InformationList>
      <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </MainDiv>
  );
};

export default MoviesDetails;
