import { Header } from '@/widgets/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router';

export function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={'Loading...'}>
          <Outlet />
        </Suspense>
      </main>
      {/* footer */}
    </>
  );
}
