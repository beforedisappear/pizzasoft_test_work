import { createAsyncThunk } from '@reduxjs/toolkit';

import type { Employee } from '../../types/employee';

export const getEmployees = createAsyncThunk<Employee[]>(
  'employees/getEmployees',
  async (_, { rejectWithValue }) => {
    try {
      //mocked response on server
      const response = await fetch('../../../../employees.json');

      if (!response.ok) {
        throw new Error('Failed to fetch employees');
      }

      return response.json();
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);
