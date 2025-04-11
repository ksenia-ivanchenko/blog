import clsx from 'clsx';
import { ComponentProps, forwardRef, useId } from 'react';
import styles from './input.module.scss';

interface InputProps extends ComponentProps<'input'> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, id, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id || generatedId;

    return (
      <div className={styles.container}>
        {label && (
          <label htmlFor={inputId} className={styles.label}>
            {label}
          </label>
        )}

        <input
          id={inputId}
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
    );
  }
);
