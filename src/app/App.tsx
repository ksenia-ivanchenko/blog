import { routes } from '@shared';
import { Layout } from './layout/layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  MainPage,
  RandomPostPage,
  LandingPage,
  NavigationPage,
  ArticlesPage,
  CreateArticlePage,
} from '@pages';
import './index.scss';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: routes.main.getLink(),
    element: (
      <Layout>
        <MainPage />
      </Layout>
    ),
  },
  {
    path: routes.randomPost.getLink(),
    element: (
      <Layout>
        <RandomPostPage />
      </Layout>
    ),
  },
  {
    path: routes.landing.getLink(),
    element: (
      <Layout>
        <LandingPage />
      </Layout>
    ),
  },
  {
    path: routes.navigation.getLink(),
    element: (
      <Layout>
        <NavigationPage />
      </Layout>
    ),
  },
  {
    path: routes.articles.getLink(),
    element: (
      <Layout>
        <ArticlesPage />
      </Layout>
    ),
  },
  {
    path: routes.createArticle.getLink(),
    element: (
      <Layout>
        <CreateArticlePage />
      </Layout>
    ),
  },
]);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);

export default App;
