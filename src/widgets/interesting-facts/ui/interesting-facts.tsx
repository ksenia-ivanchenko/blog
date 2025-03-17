import { Button, EyeIcon } from '@shared';
import styles from './interesting-facts.module.scss';

export const InterestingFacts = ({ handleScroll }) => (
  <section className={styles.screen}>
    <h2>Интересные факты про эту страницу</h2>
    <p>В ней нет смысла</p>

    <Button onClick={handleScroll}>
      Перейти дальше
      <EyeIcon />
    </Button>
  </section>
);
