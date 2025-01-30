import './styles/globals.scss';

import { StoreProvider } from './providers/StoreProvider';
import { AppRouter } from './providers/AppRouter';

import { RootLayout } from './layouts/RootLayout/RootLayout';

export function App() {
  return (
    <StoreProvider>
      <AppRouter layout={<RootLayout />} />
    </StoreProvider>
  );
}
