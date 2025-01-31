import { EmployeeRole } from '../types/employee.types';

type FilterEmployeesOption = { name: string; value: EmployeeRole };

type MapEmployeeRole = { [key in EmployeeRole]: string };

export const mapEmployeeRole: MapEmployeeRole = {
  cook: 'Повар',
  driver: 'Водитель',
  waiter: 'Официант',
};

export const defaultFilterEmployeesOptions: FilterEmployeesOption[] = [
  { name: mapEmployeeRole['cook'], value: 'cook' },
  { name: mapEmployeeRole['driver'], value: 'driver' },
  { name: mapEmployeeRole['waiter'], value: 'waiter' },
];
