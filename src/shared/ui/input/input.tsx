import clsx from 'clsx';
import { ComponentProps, forwardRef } from 'react';

import styles from './input.module.scss';

interface InputProps extends ComponentProps<'input'> {
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, ...props }, ref) => (
    <div className={styles.container}>
      <input
        className={clsx(styles.input, {
          [styles.invalid]: error,
        })}
        ref={ref}
        {...props}
      />

      <span
        className={styles.error}
        style={{ visibility: error ? 'visible' : 'hidden' }}
      >
        {error}
      </span>
    </div>
  )
);
