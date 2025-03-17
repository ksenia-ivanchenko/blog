import { CardType } from '../types/card';
import styles from './card.module.scss';

type CardTypeProps = {
  card: CardType;
};

export const Card = ({ card }: CardTypeProps) => (
  <div className={styles.card}>
    <h3>{card.title}</h3>
    <p>{card.text}</p>
  </div>
);
