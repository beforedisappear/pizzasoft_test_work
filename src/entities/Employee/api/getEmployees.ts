import type { Employee } from '../types/employee.types';

//request on REST endpoint imitation
export const getEmployees = async () => {
  //mocked response on server
  const response = await fetch('../../../../employees.json');

  if (!response.ok) {
    throw new Error('Failed to fetch employees');
  }

  const data: Employee[] = await response.json();

  return data;
};
