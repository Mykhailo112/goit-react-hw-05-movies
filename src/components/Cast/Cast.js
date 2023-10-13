import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'components/API/api';
import { PosterURL, Pleceholder } from 'components/Image/image';
import { CastList, Text, Span } from './Cast.styled';

export const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const cast = await getMovieCast(movieId);
        setCast(cast);
      } catch (e) {
        console.log(e);
      }
    };
    fetchCast();
  }, [movieId]);
  return (
    <>
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
