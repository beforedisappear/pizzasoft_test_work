import './styles/globals.scss';

import { StoreProvider } from './providers/StoreProvider';
import { NotificationProvider } from './providers/NotificationProvider';
import { AppRouter } from './providers/AppRouter';

import { RootLayout } from './layouts/RootLayout/RootLayout';
import { ErrorMessage } from '@/widgets/ErrorMessage';

export function App() {
  return (
    <StoreProvider>
      <NotificationProvider>
        <AppRouter layout={<RootLayout />} errorBoundary={<ErrorMessage />} />
      </NotificationProvider>
    </StoreProvider>
  );
}
