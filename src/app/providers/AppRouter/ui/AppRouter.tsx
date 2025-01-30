import { createBrowserRouter, RouterProvider } from 'react-router';

import { routerConfig } from '../config/router.config';

export function AppRouter() {
  const routes = Object.values(routerConfig);

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}
