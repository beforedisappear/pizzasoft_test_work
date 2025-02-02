import type { Employee } from '../types/employee.types';

interface AsyncCallbak {
  signal: AbortSignal;
}

//request on REST endpoint imitation
export const getEmployees = async ({ signal }: AsyncCallbak) => {
  //mocked response on server
  const response = await fetch('../../../../employees.json', { signal });

  if (!response.ok) {
    throw new Error('Ошибка загрузки сотрудников');
  }

  const data: Employee[] = await response.json();

  return data;
};
