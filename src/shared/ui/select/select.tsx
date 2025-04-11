import clsx from 'clsx';
import { ComponentPropsWithRef, forwardRef, useId } from 'react';
import styles from './select.module.scss';

type Option = {
  label: string;
  value: string | number;
};

interface SelectProps extends ComponentPropsWithRef<'select'> {
  label?: string;
  error?: string;
  options: Option[];
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, id, ...props }, ref) => {
    const generatedId = useId();
    const selectId = id || generatedId;

    return (
      <div className={styles.container}>
        {label && (
          <label htmlFor={selectId} className={styles.label}>
            {label}
          </label>
        )}

        <select
          id={selectId}
          ref={ref}
          className={clsx(styles.select, {
            [styles.invalid]: error,
          })}
          {...props}
        >
          <option value="" disabled hidden>
            Выберите значение
          </option>
          {options.map(({ label, value }) => (
            <option key={value.toString()} value={value}>
              {label}
            </option>
          ))}
        </select>

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
