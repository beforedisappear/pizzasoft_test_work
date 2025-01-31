import styles from './employeeByIdPage.module.scss';

import { Block } from '@/shared/ui';
import { EditEmployee } from '@/features/EditEmployee';

import { useParams } from 'react-router';

export function EmployeeByIdPage() {
  const { id } = useParams<{ id: string }>();

  if (!id) throw new Error('ID_UNDEFINED');

  return (
    <Block className={styles.employee_profile}>
      <EditEmployee id={id} />
    </Block>
  );
}
