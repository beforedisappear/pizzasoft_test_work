import { createAsyncThunk } from '@reduxjs/toolkit';

import { getEmployees } from '../../../api/getEmployees.api';

import type { Employee } from '../../../types';

export const getEmployeesThunk = createAsyncThunk<Employee[]>(
  'employees/getEmployees',
  async (_, { rejectWithValue, signal }) => {
    try {
      const data = await getEmployees({ signal });

      return data;
    } catch (e) {
      console.error(e);

      let message = 'Непредвиденная ошибка';

      if (e instanceof Error) message = e.message;

      return rejectWithValue({ message });
    }
  },
);
