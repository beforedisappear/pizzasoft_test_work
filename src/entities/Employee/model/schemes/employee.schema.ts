import { required, type InputRules } from '@/shared/lib/react-hook-form';

import type { Employee } from '../../types/employee.types';

export const employeeSchema: {
  [Key in keyof Partial<Employee>]: InputRules;
} = {
  name: {
    ...required,
    maxLength: { value: 25, message: 'Слишком длинное имя!' },
  },

  phone: { ...required },

  role: { ...required },

  birthday: {
    ...required,
    pattern: {
      message: 'некорретная дата',
      value: /^(0[1-9]|[12][0-9]|3[01])[.](0[1-9]|1[012])[.](19|20)[0-9]{2}$/,
    },
  },
};
