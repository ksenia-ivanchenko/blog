import { Tabs } from '@shared';
import { getTabsRoutes } from '../helpers/getTabsRoutes';
import styles from './header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Tabs routes={getTabsRoutes()} containerClassName={styles.tabs} />
    </header>
  );
};
