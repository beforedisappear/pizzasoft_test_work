import { HomePage } from '@/pages/HomePage';
import { EmployeeByIdPage } from '@/pages/EmployeeByIdPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { CreateEmployeePage } from '@/pages/CreateEmployeePage';

import {
  getMainRoute,
  getEmployeeByIdRoute,
  getCreateEmployeeRoute,
  AppRoutes,
} from '@/shared/lib/react-router';

import type { RouteObject } from 'react-router';

export const routerConfig: Record<AppRoutes, RouteObject> = {
  [AppRoutes.MAIN]: {
    path: getMainRoute(),
    element: <HomePage />,
  },
  [AppRoutes.EMPLOYEE_BY_ID]: {
    path: getEmployeeByIdRoute(':id'),
    element: <EmployeeByIdPage />,
  },
  [AppRoutes.CREATE_EMPLOYEE]: {
    path: getCreateEmployeeRoute(),
    element: <CreateEmployeePage />,
  },
  // last
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <NotFoundPage />,
  },
};
