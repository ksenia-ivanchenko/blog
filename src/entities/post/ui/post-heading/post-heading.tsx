import styles from './post-heading.module.scss';

export const PostHeading = ({ children }) => (
  <h3 className={styles.heading}>{children}</h3>
);
