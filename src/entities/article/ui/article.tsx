import { Button } from '@shared';
import { Article } from '../api/types';
import styles from './article.module.scss';

type ArticleCardProps = {
  article: Article;
  deleteArticle: (id: string) => void;
};

export const ArticleCard = ({ article, deleteArticle }: ArticleCardProps) => {
  const { id, title, content } = article;
  const handleClick = () => deleteArticle(id);

  return (
    <li className={styles.card}>
      <Button type="button" onClick={handleClick}>
        Удалить
      </Button>
      <h3>{title}</h3>
      <span className={styles.id}>id: {id}</span>
      <div>
        {content.type === 'draft' ? (
          <p className={styles.published}>Черновик</p>
        ) : (
          <>
            <p className={styles.published}>
              Опубликована {content.isNew && 'новая статья'}
            </p>
            <p>{content.description}</p>
          </>
        )}
      </div>
    </li>
  );
};
