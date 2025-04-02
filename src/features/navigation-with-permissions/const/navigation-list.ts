import { routes, Route } from './routes';

export type NavigationItem = {
  name: string;
  text: string;
  children: Array<Route | NavigationItem>;
};

export const navigationList: Array<NavigationItem> = [
  {
    name: 'content',
    text: 'Контент',
    children: [
      {
        name: 'job',
        text: 'Работа',
        children: [
          {
            name: 'users',
            text: 'Пользователи',
            children: [
              {
                name: 'inner-users',
                text: 'Внутренние пользователи',
                children: [routes.vacancies, routes.candidates],
              },
            ],
          },
        ],
      },
      {
        name: 'news',
        text: 'Новости',
        children: [routes.events],
      },
    ],
  },
  {
    name: 'users',
    text: 'Пользователи',
    children: [
      {
        name: 'inner-users',
        text: 'Внутренние пользователи',
        children: [routes.clients, routes.partners],
      },
    ],
  },
];
