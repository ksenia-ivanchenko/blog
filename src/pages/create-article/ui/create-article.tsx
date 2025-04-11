import { CreateArticle } from '@features/create-article';
import { articleRoutes, Tabs } from '@shared';
import styles from './create-article.module.scss';

export const CreateArticlePage = () => (
  <div className={styles.page}>
    <Tabs routes={articleRoutes} containerClassName={styles.tabs} />
    <div className={styles.content}>
      <CreateArticle />
    </div>
  </div>
);
