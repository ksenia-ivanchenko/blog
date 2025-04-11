import { NavigationItem } from '../const/types';
import { Route } from '../const/types';
import styles from './navigation.module.scss';

type NavigationProps = {
  items: Array<NavigationItem | Route>;
  level?: number;
};

export const Navigation = ({ items, level = 1 }: NavigationProps) => {
  return (
    <div className={styles.navigation_item}>
      {items.map((item) => (
        <div key={item.name}>
          {item.text}
          {'children' in item && item.children && (
            <Navigation items={item.children} level={level + 1} />
          )}
        </div>
      ))}
    </div>
  );
};
