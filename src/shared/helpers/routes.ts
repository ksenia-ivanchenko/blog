interface Route {
  getLink: () => string;
  pathname: string;
}

interface Routes {
  main: Route;
  randomPost: Route;
  landing: Route;
  navigation: Route;
}

export const routes: Routes = {
  main: {
    getLink: () => '/',
    pathname: '/',
  },
  randomPost: {
    getLink: () => '/random-post',
    pathname: '/random-post',
  },
  landing: {
    getLink: () => '/landing',
    pathname: '/landing',
  },
  navigation: {
    getLink: () => '/navigation',
    pathname: '/navigation',
  },
};
