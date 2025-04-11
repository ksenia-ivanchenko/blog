import { articleAPI, ArticleCard } from '@entities/article';
import { useMutation, useQuery } from '@tanstack/react-query';
import styles from './articles-list.module.scss';

export const ArticlesList = () => {
  const { data: articles, status } = useQuery({
    queryKey: ['fetch-articles'],
    queryFn: articleAPI.getArticles,
  });

  console.log(articles);

  const { mutate: deleteArticle } = useMutation({
    mutationFn: articleAPI.deleteArticle,
  });

  if (status !== 'success') {
    return null;
  }

  return (
    <ul className={styles.list}>
      {articles.map((item) => (
        <ArticleCard article={item} deleteArticle={deleteArticle} />
      ))}
    </ul>
  );
};
