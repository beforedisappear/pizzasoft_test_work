import styles from './employeeFilterPanel.module.scss';

import { Block } from '@/shared/ui';
import { FilterEmployees } from '@/features/FilterEmployees';
import { SortEmployees } from '@/features/SortEmployees';

interface Props {}

export function EmployeeFilterPanel({}: Props) {
  return (
    <Block className={styles.employee_filter_panel}>
      <FilterEmployees />
      <SortEmployees />
    </Block>
  );
}
