import { employeeAdapter } from '../../slice/employeeSlice';

export const selectAllEmployees = employeeAdapter.getSelectors(
  (state: RootState) => state.employee,
).selectAll;
