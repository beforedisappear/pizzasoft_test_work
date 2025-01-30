import { HomePage } from '@/pages/HomePage';
import { EmployeePage } from '@/pages/EmployeePage';
import { NotFoundPage } from '@/pages/NotFoundPage';

import {
  getMainRoute,
  getEmployeeRoute,
  AppRoutes,
} from '@/shared/lib/react-router';

import type { RouteObject } from 'react-router';

export const routerConfig: Record<AppRoutes, RouteObject> = {
  [AppRoutes.MAIN]: {
    path: getMainRoute(),
    element: <HomePage />,
  },
  [AppRoutes.EMPLOYEE]: {
    path: getEmployeeRoute(':id'),
    element: <EmployeePage />,
  },
  // last
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <NotFoundPage />,
  },
};
