import type { EmployeeRole } from '@/entities/Employee';

type FilterEmployeesOption = { name: string; value: EmployeeRole | 'all' };

export const filterEmployeesOptions: FilterEmployeesOption[] = [
  { name: 'Все', value: 'all' },
  { name: 'Повар', value: 'cook' },
  { name: 'Водитель', value: 'driver' },
  { name: 'Официант', value: 'waiter' },
];
