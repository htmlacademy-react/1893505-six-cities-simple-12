import { ReviewType } from '../../types/review';

type ReviewProps = {
  review: ReviewType;
}

export function Review({review}: ReviewProps): JSX.Element {

  const { comment, user, rating, date } = review;
  const dateReview = new Date(date);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${rating / 0.05}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={`${dateReview.getFullYear()}-${dateReview.getMonth()}-${dateReview.getDate()}`}>
          {dateReview.toLocaleString('en-EN', { month: 'long' })} {dateReview.getFullYear()}
        </time>
      </div>
    </li>
  );
}
