import styles from './employeeList.module.scss';

import {
  selectFilteredAndSortedEmployees,
  getEmployeesThunk,
  mapEmployeeRole,
} from '@/entities/Employee';

import { Block } from '@/shared/ui';
import { EmployeeListItem } from '../EmployeeListItem/EmployeeListItem';
import { EmployeeListSkeleton } from '../EmployeeListSkeleton/EmployeeListSkeleton';

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/shared/store';

import { getEmployeeByIdRoute } from '@/shared/lib/react-router';

interface Props {}

export function EmployeeList({}: Props) {
  const dispath = useAppDispatch();
  const { employees, error, status } = useAppSelector(
    selectFilteredAndSortedEmployees,
  );

  useEffect(() => {
    dispath(getEmployeesThunk());
  }, []);

  if (status === 'loading' || status === 'idle')
    return <EmployeeListSkeleton />;
  else if (status === 'error') return <div>{error?.message}</div>;

  return (
    <div className={styles.employee_list}>
      <Block as='ul' fixedWidth>
        <EmployeeListItem
          isTitle
          data={['Имя сотрудника', 'Должность', 'Номер телефона']}
        />

        {employees.map(el => {
          return (
            <EmployeeListItem
              key={el.id}
              data={[el.name, mapEmployeeRole[el.role], el.phone]}
              url={getEmployeeByIdRoute(el.id)}
            />
          );
        })}
      </Block>
    </div>
  );
}
