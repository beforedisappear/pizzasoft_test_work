import { Header } from '@/widgets/Header';
import { Outlet } from 'react-router';

export function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      {/* footer */}
    </>
  );
}
