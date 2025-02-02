import { TestAsyncThunk } from '@/shared/lib/test';
import { getEmployeeByIdThunk } from './getEmpoyeeByIdThunk';
import { firstEmployee } from '../../../mocks';
import { DeepPartial } from '@/shared/lib/utility-types';

describe('get employee by id thunk', () => {
  it('should dispatch fulfilled when employee is found in JSON', async () => {
    const mockState: DeepPartial<RootState> = {
      employee: {
        entities: {},
        ids: [],
      },
    };

    const thunk = new TestAsyncThunk(getEmployeeByIdThunk, mockState);

    thunk.api.mockResponseOnce(JSON.stringify([firstEmployee]));

    const result = await thunk.callThunk(firstEmployee.id);

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(firstEmployee);
  });

  it('should dispatch fulfilled when employee is found in store', async () => {
    const mockState: DeepPartial<RootState> = {
      employee: {
        entities: { [firstEmployee.id]: firstEmployee },
        ids: [firstEmployee.id],
      },
    };

    const thunk = new TestAsyncThunk(getEmployeeByIdThunk, mockState);

    thunk.api.mockResponseOnce(JSON.stringify([]));

    const result = await thunk.callThunk(1);

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(firstEmployee);
  });

  it('should dispatch rejected with error message when employee is not found', async () => {
    const mockState: DeepPartial<RootState> = {
      employee: {
        entities: {},
        ids: [],
      },
    };

    const thunk = new TestAsyncThunk(getEmployeeByIdThunk, mockState);

    thunk.api.mockResponseOnce(JSON.stringify([]));

    const result = await thunk.callThunk(1);

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual({ message: 'Сотрудник не найден' });
  });
});
