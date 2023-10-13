import { Link, useLocation } from 'react-router-dom';
import { Item, List } from './FilmList.styled';

export const FilmList = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies.map(({ id, original_title }) => (
        <Item key={id}>
          <Link state={{ from: location }} to={`/movies/${id}`}>
            {original_title}
          </Link>
        </Item>
      ))}
    </List>
  );
};
