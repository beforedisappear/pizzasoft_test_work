import { addEmployee, EmployeeForm } from '@/entities/Employee';

import { toast } from 'sonner';
import { SUCCESS_SUBMIT_MESSAGE } from '@/shared/constants/toast.constants';

import { useForm, FormProvider } from 'react-hook-form';
import { useAppDispatch } from '@/shared/store';

import type { FormEmployee } from '@/entities/Employee';

interface Props {}

export function CreateEmployee({}: Props) {
  const dispatch = useAppDispatch();
  const form = useForm<FormEmployee>({});

  const onSubmit = form.handleSubmit(data => {
    dispatch(addEmployee(data));
    toast(SUCCESS_SUBMIT_MESSAGE);

    form.reset();
  });

  return (
    <FormProvider {...form}>
      <EmployeeForm onSubmit={onSubmit} />
    </FormProvider>
  );
}
