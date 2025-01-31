import { createSelector } from '@reduxjs/toolkit';

import { employeeAdapter } from '../../slice/employeeSlice';
import { selectEmployeeState } from '../selectEmployeeState/selectEmployeeState';

const selectById = employeeAdapter.getSelectors(
  (state: RootState) => state.employee,
).selectById;

export const selectEmployeeById = createSelector(
  [selectById, selectEmployeeState],
  (employee, state) => ({
    employee,
    status: state.byIdStatus,
    error: state.byIdError,
  }),
);
