import styles from '../EmployeeList/employeeList.module.scss';
// import cn from 'cslx';

import { Skeleton } from '@/shared/ui';

interface Props {}

export function EmployeeListSkeleton({}: Props) {
  return (
    <div className={styles.employee_list_container}>
      <Skeleton className={styles.employee_list} />
    </div>
  );
}
