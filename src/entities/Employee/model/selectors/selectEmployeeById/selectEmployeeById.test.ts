import { selectEmployeeById } from './selectEmployeeById';

import { firstEmployee } from '../../../mocks/employee.mock';

import type { DeepPartial } from '@/shared/lib/utility-types';

describe('select Employee by id', () => {
  let mockState: DeepPartial<RootState>;

  it('should return 2 employees from state', () => {
    mockState = {
      employee: {
        ids: [firstEmployee.id],
        entities: {
          1: firstEmployee,
        },
      },
    };

    const employees = selectEmployeeById(
      mockState as RootState,
      firstEmployee.id,
    );

    expect(employees).toEqual(firstEmployee);
  });

  it('should return empty employees array from state', () => {
    mockState = { employee: { entities: {}, ids: [] } };

    const employees = selectEmployeeById(mockState as RootState, 1);

    expect(employees).toEqual(undefined);
  });
});
