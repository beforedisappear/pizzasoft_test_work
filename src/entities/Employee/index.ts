export type { Employee, EmployeeRole, EmployeeSortDir } from './types/employee';

export {
  employeeReducer,
  setSortBy,
  setSortDirection,
  setFilterRole,
  setFilterArchive,
} from './model/slice/employeeSlice';

export { getEmployees } from './model/thunks/getEmployees';

export { selectFilteredAndSortedEmployees } from './model/selectors/selectFilteredAndSortedEmployees/selectFilteredAndSortedEmployees';
export { selectSortBy } from './model/selectors/selectSortBy/selectSortBy';
export { selectSortDirection } from './model/selectors/selectSortDirection/selectSortDirection';
