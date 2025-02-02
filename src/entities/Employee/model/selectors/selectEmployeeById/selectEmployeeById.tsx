import { employeeAdapter } from '../../slices/employeeSlice/employeeSlice';

export const selectEmployeeById = employeeAdapter.getSelectors(
  (state: RootState) => state.employee,
).selectById;
