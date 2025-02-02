import {
  employeeReducer,
  addEmployee,
  updateEmployee,
  deleteEmployee,
  setSortBy,
  setSortDirection,
  setFilterRole,
  setFilterArchive,
  clearFilters,
  clearSorts,
} from './employeeSlice';

// import { getEmployeesThunk } from '../../thunks/getEmployeesThunk/getEmployeesThunk';
// import { getEmployeeByIdThunk } from '../../thunks/getEmpoyeeByIdThunk/getEmpoyeeByIdThunk';

import {
  firstEmployee,
  secondEmployee,
  thirdEmployee,
} from '../../../mocks/employee.mock';

import type { Employee } from '../../../types/employee.types';

describe('employee slice (reducers)', () => {
  let initialState: ReturnType<typeof employeeReducer>;

  const { id: id1, ...newEmployee1 } = firstEmployee;
  const { id: id2, ...newEmployee2 } = secondEmployee;
  const { id: id3, ...newEmployee3 } = thirdEmployee;

  beforeEach(() => {
    initialState = employeeReducer(undefined, { type: '@@INIT' });
  });

  it('should handle addEmployee', () => {
    const state = employeeReducer(initialState, addEmployee(newEmployee1));

    const addedEmployeeId = state.ids[0];

    expect(state.ids).toHaveLength(1);
    expect(Object.values(state.entities)).toHaveLength(1);
    expect(state.entities[addedEmployeeId]).toMatchObject(newEmployee1);
  });

  it('should handle updateEmployee', () => {
    let previouseState = employeeReducer(
      initialState,
      addEmployee(newEmployee2),
    );

    const addedEmployeeId = previouseState.ids[0];
    const employee = previouseState.entities[addedEmployeeId];

    const updatedEmployee: Employee = {
      ...employee,
      name: 'Updated Name',
    };

    let currentState = employeeReducer(
      previouseState,
      updateEmployee(updatedEmployee),
    );

    expect(currentState.entities[addedEmployeeId].name).toBe('Updated Name');
  });

  it('should handle deleteEmployee', () => {
    let state = employeeReducer(initialState, addEmployee(newEmployee3));
    state = employeeReducer(state, deleteEmployee(thirdEmployee.id));

    expect(state.entities[thirdEmployee.id]).toBeUndefined();
  });

  it('should handle setSortBy', () => {
    const state = employeeReducer(initialState, setSortBy('phone'));
    expect(state.sortBy).toBe('phone');
  });

  it('should handle setFilterRole', () => {
    const state = employeeReducer(initialState, setFilterRole('driver'));

    expect(state.filterRole).toBe('driver');
  });

  it('should handle setFilterArchive', () => {
    const state = employeeReducer(initialState, setFilterArchive(true));

    expect(state.filterArchive).toBe(true);
  });

  it('should handle clearFilters', () => {
    let state = employeeReducer(initialState, setFilterRole('driver'));

    state = employeeReducer(state, setFilterArchive(true));

    state = employeeReducer(state, clearFilters());

    expect(state.filterRole).toBe('all');
    expect(state.filterArchive).toBe(false);
  });

  it('should handle clearSorts', () => {
    let state = employeeReducer(initialState, setSortBy('phone'));
    state = employeeReducer(state, setSortDirection('desc'));

    state = employeeReducer(state, clearSorts());

    expect(state.sortBy).toBe('name');
    expect(state.sortDirection).toBe('asc');
  });

  it('should work with empty state (+handle setSortDirection)', () => {
    const state = employeeReducer(undefined, setSortDirection('desc'));

    expect(state.sortDirection).toBe('desc');
  });
});

// describe('extra reducers - getEmployeesThunk', () => {
//   it('should handle getEmployeesThunk.pending', () => {
//     const state = employeeReducer(
//       initialState,
//       getEmployeesThunk.pending('', undefined),
//     );
//     expect(state.allStatus).toBe('loading');
//   });

//   it('should handle getEmployeesThunk.fulfilled', () => {
//     const mockEmployees: Employee[] = [
//       {
//         id: 1,
//         name: 'John Doe',
//         phone: '123',
//         role: 'driver',
//         birthday: '01.01.1990',
//       },
//     ];
//     const state = employeeReducer(
//       initialState,
//       getEmployeesThunk.fulfilled(mockEmployees, '', undefined),
//     );

//     expect(state.allStatus).toBe('succeeded');
//     expect(Object.values(state.entities)).toEqual(mockEmployees);
//   });

//   it('should handle getEmployeesThunk.rejected', () => {
//     const error = { message: 'Ошибка' };
//     const state = employeeReducer(
//       initialState,
//       getEmployeesThunk.rejected(error, '', undefined),
//     );

//     expect(state.allStatus).toBe('error');
//     expect(state.allError).toEqual(error);
//   });
// });

// describe('extra reducers - getEmployeeByIdThunk', () => {
//   it('should handle getEmployeeByIdThunk.pending', () => {
//     const state = employeeReducer(
//       initialState,
//       getEmployeeByIdThunk.pending('', undefined),
//     );
//     expect(state.byIdStatus).toBe('loading');
//   });

//   it('should handle getEmployeeByIdThunk.fulfilled', () => {
//     const mockEmployee: Employee = {
//       id: 1,
//       name: 'John Doe',
//       phone: '123',
//       role: 'driver',
//       birthday: '01.01.1990',
//     };
//     const state = employeeReducer(
//       initialState,
//       getEmployeeByIdThunk.fulfilled(mockEmployee, '', undefined),
//     );

//     expect(state.byIdStatus).toBe('succeeded');
//     expect(state.entities[1]).toEqual(mockEmployee);
//   });

//   it('should handle getEmployeeByIdThunk.rejected', () => {
//     const error = { message: 'Ошибка' };
//     const state = employeeReducer(
//       initialState,
//       getEmployeeByIdThunk.rejected(error, '', undefined),
//     );

//     expect(state.byIdStatus).toBe('error');
//     expect(state.byIdError).toEqual(error);
//   });
// });
