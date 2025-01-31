import { lazy } from 'react';

export const LazyCreateEmployeePage = lazy(() =>
  import('./CreateEmployeePage').then(mod => ({
    default: mod.CreateEmployeePage,
  })),
);
