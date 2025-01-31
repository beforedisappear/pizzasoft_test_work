import { HomePage } from '@/pages/HomePage';
import { EmployeeByIdPage } from '@/pages/EmployeeByIdPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { CreateEmployeePage } from '@/pages/CreateEmployeePage';

import { ErrorMessage } from '@/widgets/ErrorMessage';

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
    errorElement: <ErrorMessage />,
  },
  [AppRoutes.EMPLOYEE_BY_ID]: {
    path: getEmployeeByIdRoute(':id'),
    element: <EmployeeByIdPage />,
    errorElement: <ErrorMessage />,
  },
  [AppRoutes.CREATE_EMPLOYEE]: {
    path: getCreateEmployeeRoute(),
    element: <CreateEmployeePage />,
    errorElement: <ErrorMessage />,
  },
  // last
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <NotFoundPage />,
  },
};
