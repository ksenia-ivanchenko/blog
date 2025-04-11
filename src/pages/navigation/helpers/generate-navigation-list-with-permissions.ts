import { NavigationItem, Route } from '@features/navigation';
import { navigationList } from '../const/navigation-list';
import { checkHasUserPermission } from './check-has-user-permission';
import { isNavigationItems, isRoutes } from './type-guards';

export const generateNavigationListWithPermissions = (): NavigationItem[] => {
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
        const hasAccess = checkHasUserPermission(route.name);
        return hasAccess ? route : null;
      });
    }

    if (isNavigationItems(children)) {
      result = children.reduce(
        (acc: NavigationItem[], item: NavigationItem) => {
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
