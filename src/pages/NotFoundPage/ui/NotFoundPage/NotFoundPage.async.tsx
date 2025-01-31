import { lazy } from 'react';

export const LazyNotFoundPage = lazy(() =>
  import('./NotFoundPage').then(mod => ({ default: mod.NotFoundPage })),
);
