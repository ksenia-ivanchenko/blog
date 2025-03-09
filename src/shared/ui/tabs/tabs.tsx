import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import styles from './tabs.module.scss';

type TabsProps = {
  routes: Array<{ name: string; path: string }>;
  containerClassName?: string;
};

export const Tabs = ({ routes, containerClassName }: TabsProps) => (
  <nav className={clsx(styles.nav, containerClassName)}>
    {routes.map((route, index) => (
      <NavLink
        to={route.path}
        className={({ isActive }) =>
          clsx(styles.link, isActive && styles.linkActive)
        }
        key={index} // использую в качестве key индекс в массиве, так как предполагается, что динамически массив роутов меняться не может
      >
        {route.name}
      </NavLink>
    ))}
  </nav>
);
