import { reviews } from '../../mocks/reviews';
import { Review } from '../review/review';

export function ReviewList() {

  const sortReviewsByDate = reviews.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <ul className="reviews__list">
      {sortReviewsByDate.map((review) => (
        <Review review={review} key={review.user.name} />
      ))}
    </ul>
  );
}
