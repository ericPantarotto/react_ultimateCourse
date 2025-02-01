import styles from './AppNav.module.css';

function AppNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>Cities</li>
        <li>Countries</li>
      </ul>
    </nav>
  );
}

export default AppNav;
