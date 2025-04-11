import { articleAPI, ArticleCard } from '@entities/article';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import styles from './articles-list.module.scss';
import { useState } from 'react';

export const ArticlesList = () => {
  const queryClient = useQueryClient();
  const [isMutating, setIsMutating] = useState(false);

  const { data: articles, status } = useQuery({
    queryKey: ['fetch-articles'],
    queryFn: articleAPI.getArticles,
  });

  const { mutate: deleteArticle } = useMutation({
    mutationFn: articleAPI.deleteArticle,
    onMutate: () => {
      setIsMutating(true);
    },
    onSuccess: () => {
      setIsMutating(false);
      queryClient.invalidateQueries({ queryKey: ['fetch-articles'] });
    },
  });

  if (status === 'pending') {
    return <div>Загрузка...</div>;
  }

  if (status === 'error') {
    return <div>Произошла ошибка при загрузке данных.</div>;
  }

  return (
    <div className={styles.content}>
      <ul className={styles.list}>
        {articles.map((item) => (
          <ArticleCard
            article={item}
            deleteArticle={deleteArticle}
            key={item.id}
          />
        ))}
      </ul>
      {!articles.length && <div>Тут пока ничего нет</div>}
      {isMutating && <div>Загрузка...</div>}
    </div>
  );
};
