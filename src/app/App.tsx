import { routes } from '@shared';
import { Layout } from './layout/layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainPage, RandomPost, Landing } from '@pages';
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
        <RandomPost />
      </Layout>
    ),
  },
  {
    path: routes.landing.getLink(),
    element: (
      <Layout>
        <Landing />
      </Layout>
    ),
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
