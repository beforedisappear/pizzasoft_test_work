import type { Employee } from '../types/employee.types';

//request on REST endpoint imitation
export const getEmployeeById = async () => {
  const response = await fetch('../../../../employees.json');

  if (!response.ok) {
    throw new Error('Ошибка загрузки сотрудника');
  }

  const data: Employee[] = await response.json();

  return data;
};
