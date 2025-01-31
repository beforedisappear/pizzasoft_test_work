import { toast, Toaster } from 'sonner';

import { useEffect, type PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {}

export function NotificationProvider({ children }: Props) {
  useEffect(() => {
    let controller = new AbortController();

    let signal = controller.signal;

    const eventHandler = () => toast('Ошибка подключения', { duration: 4000 });

    window.addEventListener('offline', eventHandler, {
      signal,
    });

    return () => {
      controller.abort();
    };
  }, []);

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
