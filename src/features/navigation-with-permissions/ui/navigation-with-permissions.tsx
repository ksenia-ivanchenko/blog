import { NavigationItem } from '../const/navigation-list';
import { Route } from '../const/routes';
import styles from './navigation-with-permissions.module.scss';

type NavigationWithPermissionsProps = {
  items: Array<NavigationItem | Route>;
  level?: number;
};

export const NavigationWithPermissions = ({
  items,
  level = 1,
}: NavigationWithPermissionsProps) => {
  return (
    <div className={`${styles[`level_${level}`]}`}>
      {items.map((item) => (
        <div key={item.name}>
          {item.text}
          {'children' in item && item.children && (
            <NavigationWithPermissions
              items={item.children}
              level={level + 1}
            />
          )}
        </div>
      ))}
    </div>
  );
};
