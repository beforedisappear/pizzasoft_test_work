import styles from './employeeListItem.module.scss';
import cn from 'clsx';

import { Link } from 'react-router';

interface Props {
  data: [string, string, string];
  url?: string;
  isTitle?: boolean;
}

export function EmployeeListItem({ isTitle, data, url }: Props) {
  const content = (
    <>
      <span
        className={cn(styles.employee_list_item_cell, styles.left, {
          [styles.title]: isTitle,
        })}
      >
        {data[0]}
      </span>

      <span
        className={cn(styles.employee_list_item_cell, {
          [styles.title]: isTitle,
        })}
      >
        {data[1]}
      </span>

      <span
        className={cn(styles.employee_list_item_cell, styles.right, {
          [styles.title]: isTitle,
        })}
      >
        {data[2]}
      </span>
    </>
  );

  return (
    <li className={styles.employee_list_item}>
      {url ? (
        <Link to={url} className={styles.employee_list_item_link}>
          {content}
        </Link>
      ) : (
        content
      )}
    </li>
  );
}
