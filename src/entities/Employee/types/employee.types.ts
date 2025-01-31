export type EmployeeRole = 'driver' | 'waiter' | 'cook';

export type EmployeeSortDir = 'asc' | 'desc';

export interface Employee {
  id: number;
  name: string;
  isArchive: boolean;
  role: EmployeeRole;
  phone: string;
  birthday: string;
}

export type FormEmployee = Omit<Employee, 'id'>;
