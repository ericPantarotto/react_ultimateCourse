import { useState } from 'react';
import StarRating from './StarRating';
import styles from './StarRating.module.css';

export function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating
        color='lightblue'
        maxRating={10}
        className={styles.forTest2}
        onSetRating={setMovieRating}
      />
      <p>
        {movieRating === 0
          ? "You haven't rated it yet!"
          : `This movie was rated ${movieRating} stars`}
      </p>
    </div>
  );
}
