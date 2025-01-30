import styles from './employeeList.module.scss';

import {
  selectFilteredAndSortedEmployees,
  getEmployees,
} from '@/entities/Employee';

import { Block } from '@/shared/ui';
import { EmployeeListItem } from '../EmployeeListItem/EmployeeListItem';
import { EmployeeListSkeleton } from '../EmployeeListSkeleton/EmployeeListSkeleton';

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/shared/store';

import { getEmployeeRoute } from '@/shared/lib/react-router';

interface Props {}

export function EmployeeList({}: Props) {
  const dispath = useAppDispatch();
  const { employees, error, status } = useAppSelector(
    selectFilteredAndSortedEmployees,
  );

  useEffect(() => {
    dispath(getEmployees());
  }, []);

  if (status === 'loading' || status === 'idle')
    return <EmployeeListSkeleton />;
  else if (status === 'error') return <div>{error?.message}</div>;

  return (
    <div className={styles.employee_list_container}>
      <Block as='ul' className={styles.employee_list}>
        <EmployeeListItem
          isTitle
          data={['Имя сотрудника', 'Должность', 'Номер телефона']}
        />

        {employees.map(el => {
          return (
            <EmployeeListItem
              key={el.id}
              data={[el.name, el.role, el.phone]}
              url={getEmployeeRoute(el.id)}
            />
          );
        })}
      </Block>
    </div>
  );
}
