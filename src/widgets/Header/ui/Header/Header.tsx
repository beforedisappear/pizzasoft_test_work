import styles from './header.module.scss';

import { Link } from 'react-router';

interface Props {}

export function Header({}: Props) {
  return (
    <header className={styles.header}>
      <Link className={styles.header_item} to={'/'}>
        <span>Главная</span>
      </Link>
    </header>
  );
}
