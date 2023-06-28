import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../optionsAPI';
import {
  ReviewAuthor,
  ReviewContent,
  Notification,
  Container,
} from './Reviews.styled';
export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { moviesId } = useParams();

  useEffect(() => {
    async function getReviewInfo() {
      try {
        const movieReview = await fetchMovieReviews(moviesId);
        console.log(movieReview.results);
        setReviews(movieReview.results);
      } catch (error) {
        console.error();
      }
    }
    getReviewInfo();
  }, [moviesId]);
  return (
    <Container>
      {Array.isArray(reviews) && reviews.length !== 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <ReviewAuthor> Author: {review.author}</ReviewAuthor>
              <ReviewContent>{review.content}</ReviewContent>
            </li>
          ))}
        </ul>
      ) : (
        <Notification>Users have not left any feedback yet</Notification>
      )}
    </Container>
  );
}
