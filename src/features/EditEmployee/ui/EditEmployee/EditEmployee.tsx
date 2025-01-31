import { EmployeeForm } from '@/entities/Employee';
import { EditEmployeeSkeleton } from '../EditEmployeeSkeleton/EditEmployeeSkeleton';

import { useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@/shared/store';

import {
  updateEmployee,
  getEmployeeByIdThunk,
  selectEmployeeById,
} from '@/entities/Employee';

import { toast } from 'sonner';
import { SUCCESS_SUBMIT_MESSAGE } from '@/shared/constants/toast.constants';

import type { FormEmployee } from '@/entities/Employee';

interface Props {
  id: string;
}

export function EditEmployee({ id }: Props) {
  const employeeId = Number(id);
  const dispatch = useAppDispatch();

  const { employee, error, status } = useAppSelector(state =>
    selectEmployeeById(state, employeeId),
  );
  const form = useForm<FormEmployee>({ values: employee });

  useEffect(() => {
    dispatch(getEmployeeByIdThunk(employeeId));
  }, []);

  if (status === 'idle' || status === 'loading') {
    return <EditEmployeeSkeleton />;
  } else if (status === 'error')
    return <span style={{ color: 'red' }}>{`Ошибка: ${error?.message}`}</span>;

  const onSubmit = form.handleSubmit(data => {
    dispatch(updateEmployee({ id: employeeId, ...data }));
    toast(SUCCESS_SUBMIT_MESSAGE);
  });

  return (
    <FormProvider {...form}>
      <EmployeeForm onSubmit={onSubmit} />
    </FormProvider>
  );
}
