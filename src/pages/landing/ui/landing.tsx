import { useNavigate } from 'react-router';
import { useRef } from 'react';
import { Button, DetailsIcon, Input } from '@shared';
import { InterestingFacts } from '@widgets';
import styles from './landing.module.scss';

export const Landing = () => {
  const navigate = useNavigate();
  const secondScreenRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    secondScreenRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.exampleHomework}>
      <h1 className={styles.visuallyHidden}>Страница Landing</h1>

      <InterestingFacts handleScroll={handleScroll} />

      <section
        className={styles.screen}
        ref={secondScreenRef}
        style={{ backgroundColor: '#e0e0e0' }}
      >
        <h2>Смотрите какие карточки</h2>

        <ul className={styles.cardsContainer}>
          <li className={styles.card}>
            <h3>Карточка 1</h3>
            <p>Пустота</p>
          </li>
          <li className={styles.card}>
            <h3>Карточка 2</h3>
            <p>Пустота</p>
          </li>
        </ul>
      </section>

      <section className={styles.block}>
        <h2>Интерактив?</h2>
        <Input type="text" placeholder="Напишите тут что-нибудь" />
        <Button onClick={() => navigate('#')}>
          Вывести текст в alert
          <DetailsIcon />
        </Button>
      </section>
    </div>
  );
};
