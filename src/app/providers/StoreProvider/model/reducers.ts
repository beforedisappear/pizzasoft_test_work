import { combineSlices } from '@reduxjs/toolkit';

import { employeeReducer } from '@/entities/Employee';

interface LazyLoadedSlices {}

export const rootReducer = combineSlices({
  employee: employeeReducer,
}).withLazyLoadedSlices<LazyLoadedSlices>();
