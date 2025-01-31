import styles from '../EmployeeList/employeeList.module.scss';

import { Block } from '@/shared/ui';

import type { SerializedError } from '@reduxjs/toolkit';

interface Props {
  error: SerializedError | null;
}

export function EmployeeListError({ error }: Props) {
  return (
    <div className={styles.employee_list}>
      <Block as='ul' fixedWidth>
        <div style={{ color: 'red', margin: '0 auto' }}>{error?.message}</div>
      </Block>
    </div>
  );
}
