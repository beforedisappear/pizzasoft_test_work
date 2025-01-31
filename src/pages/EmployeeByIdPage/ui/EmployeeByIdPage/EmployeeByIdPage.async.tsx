import { lazy } from 'react';

export const LazyEmployeeByIdPage = lazy(() =>
  import('./EmployeeByIdPage').then(mod => ({ default: mod.EmployeeByIdPage })),
);
