import { getEmployeesThunk } from './getEmployeesThunk';

import { TestAsyncThunk } from '@/shared/lib/test';

import { firstEmployee, secondEmployee, thirdEmployee } from '../../../mocks';

describe('get employees thunk', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('should dispatch fulfilled when API returns employees', async () => {
    const mockEmployees = [firstEmployee, secondEmployee, thirdEmployee];

    const thunk = new TestAsyncThunk(getEmployeesThunk);

    thunk.api.mockResponseOnce(JSON.stringify(mockEmployees));

    const result = await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(2); // pending + fulfilled
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(mockEmployees);
  });

  it('should dispatch rejected when API call fails', async () => {
    const thunk = new TestAsyncThunk(getEmployeesThunk);

    thunk.api.mockReject(new Error('API error'));

    const result = await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(2); // pending + rejected
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual({ message: 'API error' });
  });

  it('should dispatch rejected with default error message if error is unknown', async () => {
    const testThunk = new TestAsyncThunk(getEmployeesThunk);
    testThunk.api.mockReject(null as unknown as Error);

    const result = await testThunk.callThunk();

    expect(testThunk.dispatch).toHaveBeenCalledTimes(2); // pending + rejected
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual({ message: 'Непредвиденная ошибка' });
  });
});
