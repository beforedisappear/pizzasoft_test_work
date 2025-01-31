import {
  createSlice,
  createEntityAdapter,
  type PayloadAction,
  type SerializedError,
} from '@reduxjs/toolkit';

import { getEmployeesThunk } from '../thunks/getEmployeesThunk';
import { getEmployeeByIdThunk } from '../thunks/getEmpoyeeByIdThunk';

import type {
  Employee,
  EmployeeRole,
  EmployeeSortDir,
} from '../../types/employee.types';

type ThunkStatus = 'idle' | 'loading' | 'succeeded' | 'error';

interface InitState {
  byIdStatus: ThunkStatus;
  allStatus: ThunkStatus;
  byIdError: SerializedError | null;
  allError: SerializedError | null;
  sortBy: keyof Employee;
  sortDirection: EmployeeSortDir;
  filterRole: EmployeeRole | 'all';
  filterArchive: boolean;
}

export const employeeAdapter = createEntityAdapter<Employee>({
  sortComparer: (a, b) => a.id - b.id,
});

const initialState = employeeAdapter.getInitialState<InitState>({
  byIdStatus: 'idle',
  allStatus: 'idle',
  byIdError: null,
  allError: null,
  sortBy: 'name',
  sortDirection: 'asc',
  filterRole: 'all',
  filterArchive: false,
});

const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    addEmployee: {
      reducer: (state, { payload }: PayloadAction<Employee>) => {
        employeeAdapter.addOne(state, payload);
      },
      prepare: (v: Omit<Employee, 'id'>) => ({
        payload: { ...v, id: Date.now() },
      }),
    },

    updateEmployee(state, { payload }: PayloadAction<Employee>) {
      employeeAdapter.upsertOne(state, payload);
    },

    deleteEmployee(state, { payload }: PayloadAction<number>) {
      employeeAdapter.removeOne(state, payload);
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

    clearFilters: state => {
      state.filterRole = 'all';
      state.filterArchive = false;
    },

    clearSorts: state => {
      (state.sortBy = 'name'), (state.sortDirection = 'asc');
    },
  },
  extraReducers: builder => {
    builder
      //getEmployees
      .addCase(getEmployeesThunk.pending, state => {
        state.byIdStatus = 'loading';
      })
      .addCase(getEmployeesThunk.fulfilled, (state, { payload }) => {
        state.allStatus = 'succeeded';
        //TODO: add comment
        //should use setAll to rewrite data
        //but we use addMany to support routing and imit
        employeeAdapter.addMany(state, payload);
      })
      .addCase(getEmployeesThunk.rejected, (state, { error }) => {
        state.allStatus = 'error';
        state.allError = error || 'Failed to load employees';
      })
      //getEmployeeById
      .addCase(getEmployeeByIdThunk.pending, state => {
        state.byIdStatus = 'loading';
      })
      .addCase(getEmployeeByIdThunk.fulfilled, (state, { payload }) => {
        state.byIdStatus = 'succeeded';
        employeeAdapter.addOne(state, payload);
      })
      .addCase(getEmployeeByIdThunk.rejected, (state, { error }) => {
        state.byIdStatus = 'error';
        state.byIdError = error || 'Failed to load employee';
      });
  },
});

const { actions, reducer } = employeeSlice;

export { reducer as employeeReducer };

export const {
  addEmployee,
  updateEmployee,
  deleteEmployee,
  setSortBy,
  setSortDirection,
  setFilterArchive,
  setFilterRole,
  clearFilters,
  clearSorts,
} = actions;
