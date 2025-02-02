import { employeeAdapter } from '../../slices/employeeSlice/employeeSlice';

export const selectAllEmployees = employeeAdapter.getSelectors(
  (state: RootState) => state.employee,
).selectAll;
