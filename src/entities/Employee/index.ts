//types
export type {
  Employee,
  EmployeeRole,
  EmployeeSortDir,
  FormEmployee,
} from './types/employee.types';

//components
export { EmployeeForm } from './ui/EmployeeForm/EmployeeForm';

//constants
export {
  defaultFilterEmployeesOptions,
  mapEmployeeRole,
} from './constants/employee.constants';

//store
export {
  employeeReducer,
  setSortBy,
  setSortDirection,
  setFilterRole,
  setFilterArchive,
  addEmployee,
  updateEmployee,
  deleteEmployee,
  clearFilters,
  clearSorts,
} from './model/slices/employeeSlice/employeeSlice';

//thunks
export { getEmployeesThunk } from './model/thunks/getEmployeesThunk/getEmployeesThunk';
export { getEmployeeByIdThunk } from './model/thunks/getEmpoyeeByIdThunk/getEmpoyeeByIdThunk';

//selectors
export { selectFilteredAndSortedEmployees } from './model/selectors/selectFilteredAndSortedEmployees/selectFilteredAndSortedEmployees';
export { selectEmployeeById } from './model/selectors/selectEmployeeById/selectEmployeeById';
export { selectSortBy } from './model/selectors/selectSortBy/selectSortBy';
export { selectSortDirection } from './model/selectors/selectSortDirection/selectSortDirection';
