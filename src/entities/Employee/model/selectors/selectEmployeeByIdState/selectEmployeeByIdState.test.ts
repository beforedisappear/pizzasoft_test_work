import { selectEmployeeByIdState } from './selectEmployeeByIdState';

import { firstEmployee } from '../../../mocks/employee.mock';

import type { DeepPartial } from '@/shared/lib/utility-types';

describe('select employee by id and related state', () => {
  let mockState: DeepPartial<RootState>;

  it('should return employee (with status and error)', () => {
    mockState = {
      employee: {
        ids: [firstEmployee.id],
        entities: {
          [firstEmployee.id]: firstEmployee,
        },
        byIdStatus: 'succeeded',
        byIdError: null,
      },
    };

    const result = selectEmployeeByIdState(mockState as RootState, 1);

    expect(result).toEqual({
      employee: firstEmployee,
      status: 'succeeded',
      error: null,
    });
  });

  it('should return undefined employee', () => {
    mockState = {
      employee: {
        ids: [],
        entities: {},
        byIdStatus: 'idle',
        byIdError: null,
      },
    };

    const result = selectEmployeeByIdState(mockState as RootState, 2);

    expect(result).toEqual({
      employee: undefined,
      status: 'idle',
      error: null,
    });
  });

  it('should return undefined employee with error', () => {
    mockState = {
      employee: {
        ids: [],
        entities: {},
        byIdStatus: 'error',
        byIdError: { message: 'Error fetching' },
      },
    };

    const result = selectEmployeeByIdState(mockState as RootState, 3);

    expect(result).toEqual({
      employee: undefined,
      status: 'error',
      error: { message: 'Error fetching' },
    });
  });
});
