import { USER_READ_PERMISSIONS } from '../const/user-read-permissions';

export const checkHasUserPermission = (routeName: string): boolean => {
  return routeName in USER_READ_PERMISSIONS;
};
