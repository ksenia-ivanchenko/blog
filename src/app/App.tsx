import { routes } from '@shared';
import { Layout } from './layout/layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainPage, RandomPostPage, LandingPage } from '@pages';
import './index.scss';

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
]);

const App = () => <RouterProvider router={router} />;

export default App;
