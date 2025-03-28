import { Input, Button, DetailsIcon } from '@shared';
import styles from './alert-input-text.module.scss';
import { ChangeEvent, useState } from 'react';

export const AlertInputText = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    if (inputValue) {
      alert(inputValue);
    }
  };

  return (
    <section className={styles.block}>
      <h2>Интерактив?</h2>
      <Input
        type="text"
        placeholder="Напишите тут что-нибудь"
        onChange={handleChange}
      />
      <Button onClick={handleClick} disabled={!inputValue}>
        Вывести текст в alert
        <DetailsIcon />
      </Button>
    </section>
  );
};
