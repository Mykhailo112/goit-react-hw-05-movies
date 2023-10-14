import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'components/API/api';
import { List, Item, Span, Text, ErrorMsg } from './Reviews.styled';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        setError(false);
        const Reviews = await getMovieReviews(movieId);
        setReviews(Reviews);
      } catch (error) {
        setError(true);
      }
    };
    fetchReviews();
  }, [movieId]);

  return reviews.length === 0 ? (
    <h3>No Reviews</h3>
  ) : (
    <>
      {error && !loading && (
        <ErrorMsg>❌ Something went wrong,try reload page</ErrorMsg>
      )}
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
    </>
  );
};

export default Reviews;
