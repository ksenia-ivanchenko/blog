import { Header } from '@widgets';
import styles from './layout.module.scss';

export const Layout = ({ children }) => (
  <div className={styles.page}>
    <Header />
    <main className={styles.main}>{children}</main>
  </div>
);
