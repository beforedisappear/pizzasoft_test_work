import { createBrowserRouter, RouterProvider } from 'react-router';

import { routerConfig } from '../config/router.config';

interface Props {
  layout?: React.ReactNode;
  errorBoundary?: React.ReactNode;
}

export function AppRouter({ layout, errorBoundary }: Props) {
  const routes = Object.values(routerConfig);

  const router = createBrowserRouter([
    { element: layout, errorElement: errorBoundary, children: routes },
  ]);

  return <RouterProvider router={router} />;
}
