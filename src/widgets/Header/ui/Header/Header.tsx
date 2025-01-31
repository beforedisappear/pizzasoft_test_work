import styles from './header.module.scss';
import cn from 'clsx';

import { NavLink } from 'react-router';

import { getCreateEmployeeRoute } from '@/shared/lib/react-router';

interface Props {}

export function Header({}: Props) {
  return (
    <header className={styles.header}>
      <NavLink
        to={'/'}
        className={({ isActive }) =>
          cn(styles.header_item, { [styles.active]: isActive })
        }
      >
        <span>Главная</span>
      </NavLink>

      <NavLink
        to={getCreateEmployeeRoute()}
        className={({ isActive }) =>
          cn(styles.header_item, { [styles.active]: isActive })
        }
      >
        <span>Создать сотрудника</span>
      </NavLink>
    </header>
  );
}
