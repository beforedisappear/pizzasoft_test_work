import {
  createSlice,
  createEntityAdapter,
  type PayloadAction,
  SerializedError,
} from '@reduxjs/toolkit';

import { getEmployees } from '../thunks/getEmployees';

import type {
  Employee,
  EmployeeRole,
  EmployeeSortDir,
} from '../../types/employee';

interface InitState {
  status: 'idle' | 'loading' | 'succeeded' | 'error';
  error: SerializedError | null;
  sortBy: keyof Employee;
  sortDirection: EmployeeSortDir;
  filterRole: EmployeeRole | 'all';
  filterArchive: boolean;
}

export const employeeAdapter = createEntityAdapter<Employee>({
  sortComparer: (a, b) => a.id - b.id,
});

const initialState = employeeAdapter.getInitialState<InitState>({
  status: 'idle',
  error: null,
  sortBy: 'name',
  sortDirection: 'asc',
  filterRole: 'all',
  filterArchive: false,
});

const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    addEmployee(state, { payload }: PayloadAction<Employee>) {
      employeeAdapter.addOne(state, payload);
    },

    updateEmployee(state, { payload }: PayloadAction<Employee>) {
      employeeAdapter.upsertOne(state, payload);
    },

    setSortBy: (state, { payload }: PayloadAction<keyof Employee>) => {
      state.sortBy = payload;
    },

    setSortDirection: (state, { payload }: PayloadAction<EmployeeSortDir>) => {
      state.sortDirection = payload;
    },

    setFilterRole: (
      state,
      { payload }: PayloadAction<EmployeeRole | 'all'>,
    ) => {
      state.filterRole = payload;
    },

    setFilterArchive: (state, { payload }: PayloadAction<boolean>) => {
      state.filterArchive = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getEmployees.pending, state => {
        state.status = 'loading';
      })
      .addCase(getEmployees.fulfilled, (state, action) => {
        state.status = 'succeeded';
        employeeAdapter.setAll(state, action.payload);
      })
      .addCase(getEmployees.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error || 'Failed to load employees';
      });
  },
});

const { actions, reducer } = employeeSlice;

export { reducer as employeeReducer };

export const {
  addEmployee,
  updateEmployee,
  setSortBy,
  setSortDirection,
  setFilterArchive,
  setFilterRole,
} = actions;
