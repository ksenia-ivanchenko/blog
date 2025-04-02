import {
  checkHasUserPermission,
  generateNavigationListWithPermissions,
  navigationList,
  NavigationWithPermissions,
} from '@features';
import styles from './navigation-page.module.scss';

export const NavigationPage = () => {
  const navigationListWithPermission = generateNavigationListWithPermissions(
    navigationList,
    checkHasUserPermission
  );

  return (
    <div className={styles.content}>
      <NavigationWithPermissions items={navigationListWithPermission} />
    </div>
  );
};
