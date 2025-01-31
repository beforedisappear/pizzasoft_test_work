import styles from './createEmployeePage.module.scss';

import { Block } from '@/shared/ui';
import { CreateEmployee } from '@/features/CreateEmployee';

interface Props {}

export function CreateEmployeePage({}: Props) {
  return (
    <Block className={styles.create_employee_profile}>
      <CreateEmployee />
    </Block>
  );
}
