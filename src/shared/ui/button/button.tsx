import { ComponentProps } from 'react';
import styles from './button.module.scss';
import clsx from 'clsx';

interface ButtonProps extends ComponentProps<'button'> {
  className?: string;
}

export const Button = ({ children, className, ...props }: ButtonProps) => (
  <button className={clsx(styles.button, className)} {...props}>
    {children}
  </button>
);
