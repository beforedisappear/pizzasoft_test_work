import { createAsyncThunk } from '@reduxjs/toolkit';

import { getEmployeeById } from '../../../api/getEmployeeById.api.ts';

import type { Employee } from '../../../types/employee.types.ts';

export const getEmployeeByIdThunk = createAsyncThunk<Employee, number>(
  'employees/getEmployeeById',
  async (id, { rejectWithValue, getState, signal }) => {
    try {
      const data = await getEmployeeById({ signal });
      const state = getState() as RootState;

      const employeeInJson = data.find(el => el.id === id);
      const employeeIdInState = state.employee.ids.find(elId => elId === id);

      // to avoid errors when working with new users (not in json)
      if (!employeeInJson && !employeeIdInState)
        throw new Error('Сотрудник не найден');

      return (
        employeeInJson || state.employee.entities[employeeIdInState as number]
      );
    } catch (e) {
      console.error(e);
      let message = 'Непредвиденная ошибка';

      if (e instanceof Error) message = e.message;

      return rejectWithValue({ message });
    }
  },
);
