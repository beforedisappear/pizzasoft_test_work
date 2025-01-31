import { defaultFilterEmployeesOptions } from '@/entities/Employee';

export const filterEmployeesOptions = [
  { name: 'Все', value: 'all' },
  ...defaultFilterEmployeesOptions,
];
