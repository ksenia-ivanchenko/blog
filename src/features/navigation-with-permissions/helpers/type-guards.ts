import { NavigationItem } from '../const/navigation-list';
import { Route } from '../const/routes';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isRoutes(children: any): children is Route[] {
  return (
    Array.isArray(children) &&
    typeof children[0].name === 'string' &&
    typeof children[0].pathname === 'string' &&
    typeof children[0].getLink === 'function' &&
    typeof children[0].text === 'string'
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isNavigationItems(children: any): children is NavigationItem[] {
  return (
    Array.isArray(children) &&
    'name' in children[0] &&
    'text' in children[0] &&
    'children' in children[0]
  );
}
