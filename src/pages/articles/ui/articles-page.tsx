import { ArticlesList } from '@features/articles-list';
import { articleRoutes, Tabs } from '@shared';
import styles from './articles-page.module.scss';

export const ArticlesPage = () => {
  return (
    <div className={styles.page}>
      <Tabs routes={articleRoutes} containerClassName={styles.tabs} />
      <div className={styles.content}>
        <ArticlesList />
      </div>
    </div>
  );
};
