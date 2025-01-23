import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import StarRating from './components/StarRating';
import styles from './components/StarRating.module.css';
import { Test } from './components/StarTestComponent';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StarRating />
    <StarRating
      size={24}
      color='purple'
      className={styles.forTest1}
      messages={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']}
      defaultRating={3}
    />

    <Test />
  </StrictMode>
);
