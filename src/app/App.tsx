import './styles/globals.scss';

import { StoreProvider } from './providers/StoreProvider';
import { ToastProvider } from './providers/ToastProvider';
import { AppRouter } from './providers/AppRouter';

import { RootLayout } from './layouts/RootLayout/RootLayout';

export function App() {
  return (
    <StoreProvider>
      <ToastProvider>
        <AppRouter layout={<RootLayout />} />
      </ToastProvider>
    </StoreProvider>
  );
}
