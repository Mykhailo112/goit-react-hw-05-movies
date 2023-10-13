import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'components/API/api';
import { List, Item, Span, Text } from './Reviews.styled';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const Reviews = await getMovieReviews(movieId);
        setReviews(Reviews);
      } catch (e) {
        console.log(e);
      }
    };
    fetchReviews();
  }, [movieId]);

  return reviews.length === 0 ? (
    <h3>No Reviews</h3>
  ) : (
    <List>
      {reviews.map(({ id, author, content }) => (
        <Item key={id}>
          <Text>
            <Span>Author:</Span>
            {author}
          </Text>
          <p>{content}</p>
        </Item>
      ))}
    </List>
  );
};

export default Reviews;
