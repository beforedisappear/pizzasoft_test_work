import styles from '../EmployeeList/employeeList.module.scss';
// import cn from 'cslx';

import { Block, Skeleton } from '@/shared/ui';

interface Props {}

export function EmployeeListSkeleton({}: Props) {
  return (
    <div className={styles.employee_list}>
      <Block>
        <Skeleton style={{ flexGrow: 1, width: '100%', height: '100%' }} />
      </Block>
    </div>
  );
}
