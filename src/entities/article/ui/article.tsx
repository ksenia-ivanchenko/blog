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
    <li key={id} className={styles.card}>
      <button type="button" onClick={handleClick}>
        Удалить
      </button>
      <p>id: {id}</p>
      <p>заголовок: {title}</p>
      <p>тип: {content.type}</p>
      <div>
        {content.type === 'draft' ? (
          <div>
            <p>Черновик</p>
          </div>
        ) : (
          <div>
            <p>Опубликована {content.isNew && 'Новая статья'}</p>
            <p>{content.description}</p>
          </div>
        )}
      </div>
    </li>
  );
};
