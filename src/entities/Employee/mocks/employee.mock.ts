import type { Employee } from '../types';

export const firstEmployee: Employee = {
  id: 1,
  name: 'Alice',
  phone: '+795398386666',
  role: 'driver' as const,
  birthday: '28.06.2000',
  isArchive: false,
};

export const secondEmployee: Employee = {
  id: 2,
  name: 'Bob',
  phone: '+791232311323',
  role: 'waiter' as const,
  birthday: '06.08.2004',
  isArchive: false,
};

export const thirdEmployee: Employee = {
  id: 3,
  name: 'Charlie',
  phone: '+791011122233',
  role: 'driver' as const,
  birthday: '15.05.1995',
  isArchive: false,
};

export const fourthEmployee: Employee = {
  id: 4,
  name: 'Delta',
  phone: '+791011121323',
  role: 'cook' as const,
  birthday: '15.05.1980',
  isArchive: false,
};

export const fifthEmployee: Employee = {
  id: 5,
  name: 'Yandex',
  phone: '+791011121323',
  role: 'cook' as const,
  birthday: '15.05.1979',
  isArchive: true,
};
