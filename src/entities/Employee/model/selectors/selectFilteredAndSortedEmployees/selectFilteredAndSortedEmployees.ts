import { createSelector } from '@reduxjs/toolkit';
import _ from 'lodash';

import { selectAllEmployees } from '../selectAllEmployees/selectAllEmployees';
import { selectEmployeeState } from '../selectEmployeeState/selectEmployeeState';
import { convertDateToISO } from '@/shared/lib/date';

import type { Employee } from '../../../types/employee.types';

export const selectFilteredAndSortedEmployees = createSelector(
  [selectAllEmployees, selectEmployeeState],
  (
    employees,
    { sortBy, filterRole, filterArchive, allStatus, allError, sortDirection },
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

    const sortFunc = function (employee: Employee) {
      return sortBy === 'birthday'
        ? convertDateToISO(employee.birthday)
        : employee[sortBy];
    };

    const sortedEmployees = _.orderBy(filteredEmployees, sortFunc, [
      sortDirection,
    ]);

    return {
      status: allStatus,
      error: allError,
      employees: sortedEmployees,
    };
  },
);
