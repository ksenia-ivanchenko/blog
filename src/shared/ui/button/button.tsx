import { ComponentProps } from 'react';
import styles from './button.module.scss';
import clsx from 'clsx';

interface ButtonProps extends ComponentProps<'button'> {
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const Button = ({
  children,
  className,
  type = 'button',
  ...props
}: ButtonProps) => (
  <button className={clsx(styles.button, className)} type={type} {...props}>
    {children}
  </button>
);
