import styles from './filterEmployees.module.scss';

import { Listbox, Checkbox } from '@/shared/ui';

import { FormProvider, useForm } from 'react-hook-form';
import { useAppDispatch } from '@/shared/store';
import { useEffect } from 'react';

import {
  clearFilters,
  setFilterArchive,
  setFilterRole,
  type EmployeeRole,
} from '@/entities/Employee';

import { filterEmployeesOptions } from './FilterEmployees.data';

interface Props {}

export function FilterEmployees({}: Props) {
  const dispatch = useAppDispatch();
  const form = useForm<{ employeeFilterRole: EmployeeRole }>();

  //to reset filter state after component unmounting
  useEffect(() => {
    return () => {
      dispatch(clearFilters());
    };
  }, []);

  const onSubmit = form.handleSubmit((_, e) => {
    e?.preventDefault();
  });

  const handleChangeRole = (value: EmployeeRole | 'all') => {
    dispatch(setFilterRole(value));
  };

  const handleChangeArchive = (value: boolean) => {
    dispatch(setFilterArchive(value));
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={onSubmit} className={styles.filter_form}>
        <Listbox
          name='employeeFilterRole'
          options={filterEmployeesOptions}
          onChange={handleChangeRole}
          className={styles.filter_select}
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
