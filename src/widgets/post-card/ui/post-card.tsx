import { GetRandomPost } from '@features';
import styles from './post-card.module.scss';

export const PostCard = () => (
  <div className={styles.content}>
    <h2>Рандомный пост</h2>
    <GetRandomPost></GetRandomPost>
  </div>
);
