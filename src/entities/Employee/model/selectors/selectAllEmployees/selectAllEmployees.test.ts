import { selectAllEmployees } from './selectAllEmployees';

import { firstEmployee, secondEmployee } from '../../../mocks/employee.mock';

import type { DeepPartial } from '@/shared/lib/utility-types';

describe('select all employees', () => {
  let mockState: DeepPartial<RootState>;

  it('should return 2 employees from state', () => {
    mockState = {
      employee: {
        ids: [firstEmployee.id, secondEmployee.id],
        entities: {
          [firstEmployee.id]: firstEmployee,
          [secondEmployee.id]: secondEmployee,
        },
      },
    };

    const employees = selectAllEmployees(mockState as RootState);

    expect(employees).toEqual([firstEmployee, secondEmployee]);
  });

  it('should return empty employees array from state', () => {
    mockState = { employee: { entities: {}, ids: [] } };

    const employees = selectAllEmployees(mockState as RootState);

    expect(employees).toEqual([]);
  });
});
