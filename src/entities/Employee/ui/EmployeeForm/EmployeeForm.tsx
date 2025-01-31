import styles from './employeeForm.module.scss';

import { Input, Listbox, Checkbox, Button, MaskInput } from '@/shared/ui';

import { defaultFilterEmployeesOptions } from '../../constants/employee.constants';
import { dateMask, phoneNumberMask } from '@/shared/lib/react-mask';
import { employeeSchema } from '../../model/schemes/employeeSchema';

interface IProps {
  onSubmit: () => void;
}

export function EmployeeForm(props: IProps) {
  const { onSubmit } = props;

  return (
    <form onSubmit={onSubmit} className={styles.employee_form}>
      <Input name='name' rules={employeeSchema.name} />

      <MaskInput
        name='birthday'
        placeholder='ДД.ММ.ГГГГ'
        mask={dateMask}
        rules={employeeSchema.birthday}
      />

      <MaskInput
        name='phone'
        mask={phoneNumberMask}
        rules={employeeSchema.phone}
      />

      <Listbox
        name='role'
        options={defaultFilterEmployeesOptions}
        rules={employeeSchema.role}
      />

      <Checkbox name='isArchive' label='В архиве' />

      <Button type='submit' className={styles.employee_form_btn}>
        Отправить
      </Button>
    </form>
  );
}
