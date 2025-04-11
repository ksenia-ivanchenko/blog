import { useRef, useState } from 'react';
import { CardsList } from '@widgets/cards-list';
import { CardType } from '@entities/card';
import { AlertInputText } from '@features/alert-input-text';
import styles from './landing-page.module.scss';
import { InterestingFacts } from '@widgets/interesting-facts';

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
