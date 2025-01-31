import { Toaster } from 'sonner';

import type { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {}

export function ToastProvider({ children }: Props) {
  return (
    <>
      {children}
      <Toaster
        position='bottom-right'
        theme='dark'
        expand
        visibleToasts={6}
        duration={1700}
      />
    </>
  );
}
