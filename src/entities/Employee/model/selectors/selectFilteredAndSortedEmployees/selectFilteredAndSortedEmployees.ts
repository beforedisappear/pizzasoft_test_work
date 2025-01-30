import { createSelector } from '@reduxjs/toolkit';
import _ from 'lodash';

// import { selectSortBy } from '../selectSortBy/selectSortBy';
// import { selectFilterRole } from '../selectFilterRole/selectFilterRole';
// import { selectFilterArchive } from '../selectFilterArchive/selectFilterArchive';
import { selectAllEmployees } from '../selectAllEmployees/selectAllEmployees';
import { selectEmployeeState } from '../selectEmployeeState/selectEmployeeState';
import { convertDateToISO } from '@/shared/lib/date';

export const selectFilteredAndSortedEmployees = createSelector(
  [selectAllEmployees, selectEmployeeState],
  (
    employees,
    { sortBy, filterRole, filterArchive, status, error, sortDirection },
  ) => {
    let filteredEmployees = employees;

    if (filterRole !== 'all') {
      filteredEmployees = filteredEmployees.filter(
        employee => employee.role === filterRole,
      );
    }

    if (!filterArchive) {
      filteredEmployees = filteredEmployees.filter(
        employee => !employee.isArchive,
      );
    }

    const sortedEmployees = _.orderBy(
      filteredEmployees,
      employee =>
        sortBy === 'birthday'
          ? convertDateToISO(employee.birthday)
          : employee[sortBy],
      [sortDirection],
    );

    return {
      status,
      error,
      employees: sortedEmployees,
    };
  },
);
