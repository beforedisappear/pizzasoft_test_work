import './styles/globals.scss';

import { StoreProvider } from './providers/StoreProvider';
import { AppRouter } from './providers/AppRouter';

export function App() {
  return (
    <StoreProvider>
      <AppRouter />
    </StoreProvider>
  );
}
