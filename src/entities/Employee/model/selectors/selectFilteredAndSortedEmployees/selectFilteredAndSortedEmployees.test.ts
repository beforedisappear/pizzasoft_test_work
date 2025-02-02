import { selectFilteredAndSortedEmployees } from './selectFilteredAndSortedEmployees';

import {
  firstEmployee,
  secondEmployee,
  thirdEmployee,
  fourthEmployee,
  fifthEmployee,
} from '../../../mocks';

import type { DeepPartial } from '@/shared/lib/utility-types';

const employees = {
  ids: [
    firstEmployee.id,
    secondEmployee.id,
    thirdEmployee.id,
    fourthEmployee.id,
    fifthEmployee.id,
  ],
  entities: {
    [firstEmployee.id]: firstEmployee,
    [secondEmployee.id]: secondEmployee,
    [thirdEmployee.id]: thirdEmployee,
    [fourthEmployee.id]: fourthEmployee,
    [fifthEmployee.id]: fifthEmployee,
  },
};

const defaultState = {
  sortBy: 'name' as const,
  sortDirection: 'asc' as const,
  filterRole: 'all' as const,
  filterArchive: false,
  allStatus: 'idle' as const,
  allError: null,
};

describe('selectFilteredAndSortedEmployees test', () => {
  let mockState: DeepPartial<RootState>;

  it('should output all employees (in archive too)', () => {
    mockState = {
      employee: {
        ...employees,
        ...defaultState,
        filterArchive: true,
        allStatus: 'succeeded',
      },
    };

    const result = selectFilteredAndSortedEmployees(mockState as RootState);

    expect(result.status).toEqual('succeeded');
    expect(result.error).toBeNull();
    expect(result.employees).toEqual([
      firstEmployee,
      secondEmployee,
      thirdEmployee,
      fourthEmployee,
      fifthEmployee,
    ]);
  });

  it('should filter employees by role', () => {
    mockState = {
      employee: {
        ...employees,
        ...defaultState,
        filterRole: 'driver',
        allStatus: 'succeeded',
      },
    };

    const result = selectFilteredAndSortedEmployees(mockState as RootState);

    expect(result.status).toEqual('succeeded');
    expect(result.error).toBeNull();
    expect(result.employees).toEqual([firstEmployee, thirdEmployee]);
  });

  it('should sort all employees by name in descending order', () => {
    mockState = {
      employee: {
        ...employees,
        ...defaultState,
        filterArchive: true,
        allStatus: 'succeeded',
        sortDirection: 'desc',
      },
    };

    const result = selectFilteredAndSortedEmployees(mockState as RootState);

    expect(result.status).toEqual('succeeded');
    expect(result.error).toBeNull();
    expect(result.employees[0]).toBe(fifthEmployee);
    expect(result.employees[1]).toBe(fourthEmployee);
    expect(result.employees[2]).toBe(thirdEmployee);
    expect(result.employees[3]).toBe(secondEmployee);
    expect(result.employees[4]).toBe(firstEmployee);
  });

  it('should sort all employees by birthday in ascending order', () => {
    mockState = {
      employee: {
        ...employees,
        ...defaultState,
        sortBy: 'birthday',
        filterArchive: true,
        allStatus: 'succeeded',
        allError: null,
        sortDirection: 'asc',
      },
    };

    const result = selectFilteredAndSortedEmployees(mockState as RootState);

    expect(result.status).toEqual('succeeded');
    expect(result.error).toBeNull();
    expect(result.employees[0]).toBe(fifthEmployee);
    expect(result.employees[1]).toBe(fourthEmployee);
    expect(result.employees[2]).toBe(thirdEmployee);
    expect(result.employees[3]).toBe(firstEmployee);
    expect(result.employees[4]).toBe(secondEmployee);
  });

  it('should return an empty array', () => {
    mockState = {
      employee: {
        ...defaultState,
        allStatus: 'succeeded',
        filterArchive: true,
        ids: [],
        entities: {},
      },
    };

    const result = selectFilteredAndSortedEmployees(mockState as RootState);

    expect(result.status).toEqual('succeeded');
    expect(result.error).toBeNull();
    expect(result.employees).toEqual([]);
  });

  it('should return empty state with error', () => {
    mockState = {
      employee: {
        ...defaultState,
        allStatus: 'error',
        allError: { message: 'Error fetching' },
        ids: [],
        entities: {},
      },
    };

    const result = selectFilteredAndSortedEmployees(mockState as RootState);

    expect(result.status).toEqual('error');
    expect(result.error).toEqual({ message: 'Error fetching' });
    expect(result.employees).toEqual([]);
  });
});
