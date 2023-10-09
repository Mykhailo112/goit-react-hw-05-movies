import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'API/api';

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
      <ul>
        {cast.map(({ id, original_name, profile_path, character }) => (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
              alt={original_name}
              width={100}
            />
            <p>Actor:{original_name}</p>
            <p>Character:{character}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
