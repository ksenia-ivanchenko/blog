import { useNavigate } from 'react-router';
import { useRef, useState } from 'react';
import { Button, DetailsIcon, Input } from '@shared';
import { CardsList, InterestingFacts } from '@widgets';
import styles from './landing.module.scss';
import { CardType } from 'entities';

export const Landing = () => {
  const navigate = useNavigate();
  const secondScreenRef = useRef<HTMLDivElement | null>(null);
  const [cards] = useState<CardType[]>([
    { title: 'Карточка 1', text: 'Пустота' },
    { title: 'Карточка 2', text: 'Пустота' },
  ]);

  const handleScroll = () => {
    secondScreenRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.exampleHomework}>
      <h1 className={styles.visuallyHidden}>Страница Landing</h1>

      <InterestingFacts handleScroll={handleScroll} />
      <CardsList cards={cards} ref={secondScreenRef} />

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
