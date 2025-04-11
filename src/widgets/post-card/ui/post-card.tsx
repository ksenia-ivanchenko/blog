import { GetRandomPost } from '@features/get-random-post';
import styles from './post-card.module.scss';

export const PostCard = () => (
  <div className={styles.card}>
    <h2 className={styles.heading}>Рандомный пост</h2>
    <GetRandomPost />
  </div>
);
