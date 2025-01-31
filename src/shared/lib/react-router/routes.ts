// import { AppRoutes } from './routes.types';

export const getMainRoute = () => '/';
export const getEmployeeByIdRoute = (id: string | number) => `/employee/${id}`;
export const getCreateEmployeeRoute = () => `/employee/create`;

// export const AppRouteByPathPattern: Record<string, AppRoutes> = {
//   [getMainRoute()]: AppRoutes.MAIN,
//   [getEmployeeRoute(':id')]: AppRoutes.EMPLOYEE,
// };
