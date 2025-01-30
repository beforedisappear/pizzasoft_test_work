// import { AppRoutes } from './routes.types';

export const getMainRoute = () => '/';
export const getEmployeeRoute = (id: string) => `/employee/${id}`;

// export const AppRouteByPathPattern: Record<string, AppRoutes> = {
//   [getMainRoute()]: AppRoutes.MAIN,
//   [getEmployeeRoute(':id')]: AppRoutes.EMPLOYEE,
// };
