import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'API/api';

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
    <ul>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <p>
            <span>Author:</span>
            {author}
          </p>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};
