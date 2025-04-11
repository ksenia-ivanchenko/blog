import { ArticlesList } from '@features/articles-list';
import { routes, Tabs } from '@shared';
import styles from './articles-page.module.scss';

export const ArticlesPage = () => {
  const articleRoutes = [
    { name: 'Список карточек', path: routes.articles.getLink() },
    { name: 'Создать карточку', path: routes.createArticle.getLink() },
  ];

  return (
    <div className={styles.page}>
      <Tabs routes={articleRoutes} />
      <ArticlesList />
    </div>
  );
};
