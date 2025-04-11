import { routes } from './routes';

export const articleRoutes = [
  { name: 'Список карточек', path: routes.articles.getLink() },
  { name: 'Создать карточку', path: routes.createArticle.getLink() },
];
