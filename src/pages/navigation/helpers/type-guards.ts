import { NavigationItem } from '../const/navigation-list';
import { Route } from '../const/routes';

export function isRoutes(children: unknown): children is Route[] {
  return (
    Array.isArray(children) &&
    typeof children[0].name === 'string' &&
    typeof children[0].pathname === 'string' &&
    typeof children[0].getLink === 'function' &&
    typeof children[0].text === 'string'
  );
}

export function isNavigationItems(
  children: unknown
): children is NavigationItem[] {
  return (
    Array.isArray(children) &&
    'name' in children[0] &&
    'text' in children[0] &&
    'children' in children[0]
  );
}
