import styles from './filterEmployees.module.scss';

import { Listbox, Checkbox } from '@/shared/ui';
import { FormProvider, useForm } from 'react-hook-form';
import { useAppDispatch } from '@/shared/store';

import { filterEmployeesOptions } from './FilterEmployees.data';

import {
  setFilterArchive,
  setFilterRole,
  type EmployeeRole,
} from '@/entities/Employee';

interface Props {}

export function FilterEmployees({}: Props) {
  const dispath = useAppDispatch();
  const form = useForm<{ employeeFilterRole: EmployeeRole }>();

  const onSubmit = form.handleSubmit((_, e) => {
    e?.preventDefault();
  });

  const handleChangeRole = (value: EmployeeRole | 'all') => {
    dispath(setFilterRole(value));
  };

  const handleChangeArchive = (value: boolean) => {
    dispath(setFilterArchive(value));
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={onSubmit} className={styles.filter_form}>
        <Listbox
          name='employeeFilterRole'
          options={filterEmployeesOptions}
          onChange={handleChangeRole}
        />

        <Checkbox
          name='employeeFilterArchive'
          label='В архиве'
          onChange={handleChangeArchive}
        />
      </form>
    </FormProvider>
  );
}
