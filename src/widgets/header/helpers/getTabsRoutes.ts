import { routes } from '@shared';

export const getTabsRoutes = () => {
  return [
    { path: routes.main.getLink(), name: 'Главная' },
    { path: routes.randomPost.getLink(), name: 'Рандомный пост' },
    { path: routes.landing.getLink(), name: 'Landing' },
  ];
};
