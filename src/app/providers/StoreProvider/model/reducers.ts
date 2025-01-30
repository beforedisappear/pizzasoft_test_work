import { combineSlices } from '@reduxjs/toolkit';

interface LazyLoadedSlices {}

export const rootReducer = combineSlices(
  {},
).withLazyLoadedSlices<LazyLoadedSlices>();
