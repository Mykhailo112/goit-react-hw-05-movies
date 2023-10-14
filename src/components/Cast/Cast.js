import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'components/API/api';
import { PosterURL, Pleceholder } from 'components/Image/image';
import { CastList, Text, Span, ErrorMsg } from './Cast.styled';

export const Cast = () => {
  const { movieId } = useParams();

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setLoading(true);
        setError(false);
        const cast = await getMovieCast(movieId);
        setCast(cast);
      } catch (error) {
        setError(true);
      }
    };
    fetchCast();
  }, [movieId]);
  return (
    <>
      {error && !loading && (
        <ErrorMsg>❌ Something went wrong,try reload page</ErrorMsg>
      )}
      <CastList>
        {cast.map(({ id, original_name, profile_path, character }) => (
          <li key={id}>
            <img
              src={
                profile_path
                  ? PosterURL + profile_path
                  : Pleceholder + '?text=' + original_name
              }
              alt={original_name}
              width={100}
            />
            <Text>
              <Span>Actor:</Span> {original_name}
            </Text>
            <Text>
              <Span>Character:</Span> {character}
            </Text>
          </li>
        ))}
      </CastList>
    </>
  );
};

export default Cast;
