import { Navigation } from '@features/navigation';
import styles from './navigation-page.module.scss';
import { generateNavigationListWithPermissions } from '../helpers/generate-navigation-list-with-permissions';

export const NavigationPage = () => {
  const navigationListWithPermission = generateNavigationListWithPermissions();

  return (
    <div className={styles.content}>
      <Navigation items={navigationListWithPermission} />
    </div>
  );
};
