import { rootReducer } from './reducers';
import { storeMiddlewares } from './middlewares';
import { configureStore } from '@reduxjs/toolkit';

export function createReduxStore(
  initialState?: Partial<ReturnType<typeof rootReducer>>,
) {
  return configureStore({
    //reducers list
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      //middleware connection for the work of RTK query
      getDefaultMiddleware({}).concat(storeMiddlewares),
    devTools: import.meta.env.DEV,
    preloadedState: initialState,
  });
}

export const store = createReduxStore();

declare global {
  type AppStore = typeof store;
  type RootState = ReturnType<AppStore['getState']>;
  type AppDispatch = AppStore['dispatch'];
}
