import { forwardRef } from 'react';
import { Card, CardType } from '@entities';
import styles from './cards-list.module.scss';

type CardsListProps = {
  cards: CardType[];
};

export const CardsList = forwardRef<HTMLDivElement, CardsListProps>(
  ({ cards }: CardsListProps, ref) => (
    <section
      className={styles.screen}
      ref={ref}
      style={{ backgroundColor: '#e0e0e0' }}
    >
      <h2>Смотрите какие карточки</h2>

      <ul className={styles.cardsContainer}>
        {cards.map((card) => (
          <li>
            <Card card={card} />
          </li>
        ))}
      </ul>
    </section>
  )
);
