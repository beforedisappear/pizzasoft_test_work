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
      console.log(123);
      let message = 'Непредвиденная ошибка';

      if (e instanceof Error) message = e.message;

      return rejectWithValue({ message });
    }
  },
);
