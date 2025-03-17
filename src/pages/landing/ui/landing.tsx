import { useNavigate } from 'react-router';
import { useRef } from 'react';
import { Button, DetailsIcon, EyeIcon, Input } from '@shared';
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

      <div className={styles.screen}>
        <h2>Интересные факты про эту страницу</h2>

        <p>В ней нет смысла</p>
        <Button onClick={handleScroll}>
          Перейти дальше
          <EyeIcon />
        </Button>
      </div>

      <div
        className={styles.screen}
        ref={secondScreenRef}
        style={{ backgroundColor: '#e0e0e0' }}
      >
        <h2>Смотрите какие карточки</h2>
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <h4>Карточка 1</h4>
            <p>Пустота</p>
          </div>
          <div className={styles.card}>
            <h4>Карточка 2</h4> <p>Пустота</p>
          </div>
        </div>
      </div>

      <div className={styles.block}>
        <h2>Интерактив?</h2>
        <Input type="text" placeholder="Напишите тут что-нибудь" />
        <Button onClick={() => navigate('#')}>
          Вывести текст в alert
          <DetailsIcon />
        </Button>
      </div>
    </div>
  );
};
