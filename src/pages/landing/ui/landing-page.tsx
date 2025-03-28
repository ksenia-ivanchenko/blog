import { useRef, useState } from 'react';
import { CardsList, InterestingFacts } from '@widgets';
import { CardType } from '@entities';
import { AlertInputText } from '@features';
import styles from './landing-page.module.scss';

export const LandingPage = () => {
  const secondScreenRef = useRef<HTMLDivElement | null>(null);
  const [cards] = useState<CardType[]>([
    { title: 'Карточка 1', text: 'Пустота', id: '1' },
    { title: 'Карточка 2', text: 'Пустота', id: '2' },
  ]);

  const handleScroll = () => {
    secondScreenRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.exampleHomework}>
      <h1 className={styles.visuallyHidden}>Страница Landing</h1>

      <InterestingFacts handleScroll={handleScroll} />
      <CardsList cards={cards} ref={secondScreenRef} />
      <AlertInputText />
    </div>
  );
};
