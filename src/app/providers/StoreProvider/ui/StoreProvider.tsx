import { Provider } from 'react-redux';

import { store } from '../model/store';

import type { PropsWithChildren } from 'react';

export function StoreProvider({ children }: PropsWithChildren) {
  return <Provider store={store}>{children}</Provider>;
}
