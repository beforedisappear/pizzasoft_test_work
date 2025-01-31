import { createAsyncThunk } from '@reduxjs/toolkit';

import { getEmployees } from '../../api/getEmployees';

import type { Employee } from '../../types/employee.types';

export const getEmployeesThunk = createAsyncThunk<Employee[]>(
  'employees/getEmployees',
  (_, { rejectWithValue }) => {
    try {
      return getEmployees();
    } catch (e) {
      console.error(e);
      return rejectWithValue(e);
    }
  },
);
