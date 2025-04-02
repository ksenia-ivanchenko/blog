import { NavigationItem } from '../const/navigation-list';
import { Route } from '../const/routes';
import { isNavigationItems, isRoutes } from './type-guards';

export const generateNavigationListWithPermissions = (
  navigationList: Array<NavigationItem>,
  checkPermission: (routeName: string) => boolean
): Array<NavigationItem> => {
  const permissions = [];

  for (const item of navigationList) {
    const { children } = item;

    const filteredChildren = getAccessRoutes(children);
    if (filteredChildren.length > 0) {
      permissions.push({
        ...item,
        children: filteredChildren,
      });
    }
  }

  function getAccessRoutes(
    children: Array<Route | NavigationItem>
  ): Array<Route | NavigationItem> {
    let result: Array<Route | NavigationItem> = [];

    if (isRoutes(children)) {
      result = children.filter((route) => {
        const hasAccess = checkPermission(route.name);
        return hasAccess ? route : null;
      });
    }

    if (isNavigationItems(children)) {
      result = children.reduce(
        (acc: Array<NavigationItem>, item: NavigationItem) => {
          const { children: nextLevelChildren } = item;
          const filteredChildren = getAccessRoutes(nextLevelChildren);

          if (filteredChildren.length > 0) {
            acc.push({
              ...item,
              children: filteredChildren,
            });
          }
          return acc;
        },
        []
      );
    }

    return result;
  }

  return permissions;
};
