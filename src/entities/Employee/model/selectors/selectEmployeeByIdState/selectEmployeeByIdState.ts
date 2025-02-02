import { createSelector } from '@reduxjs/toolkit';
import { selectEmployeeById } from '../selectEmployeeById/selectEmployeeById';
import { selectEmployeeState } from '../selectEmployeeState/selectEmployeeState';

export const selectEmployeeByIdState = createSelector(
  [selectEmployeeById, selectEmployeeState],
  (employee, state) => ({
    employee,
    status: state.byIdStatus,
    error: state.byIdError,
  }),
);
