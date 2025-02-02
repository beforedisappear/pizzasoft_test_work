import type { Employee } from '../types/employee.types';

interface AsyncCallbak {
  signal: AbortSignal;
}

//request on REST endpoint imitation
export const getEmployeeById = async ({ signal }: AsyncCallbak) => {
  const response = await fetch('../../../../employees.json', { signal });

  if (!response.ok) {
    throw new Error('Ошибка загрузки сотрудника');
  }

  const data: Employee[] = await response.json();

  return data;
};
