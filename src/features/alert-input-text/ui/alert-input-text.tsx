import { Input, Button, DetailsIcon } from '@shared';
import styles from './alert-input-text.module.scss';
import { ChangeEvent, useState } from 'react';

export const AlertInputText = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setError(null);
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    if (inputValue) {
      alert(inputValue);
    } else {
      setError('Необходимо ввести что-нибудь');
    }
  };

  return (
    <section className={styles.block}>
      <h2>Интерактив?</h2>
      <Input
        type="text"
        placeholder="Напишите тут что-нибудь"
        onChange={handleChange}
        error={error}
      />
      <Button onClick={handleClick}>
        Вывести текст в alert
        <DetailsIcon />
      </Button>
    </section>
  );
};
