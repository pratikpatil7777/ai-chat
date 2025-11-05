'use client';

import { Provider as ReduxProvider } from 'react-redux';
import { SWRConfig } from 'swr';
import { ThemeProvider } from 'next-themes';
import { useAppStore } from '@/store';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { clearSessionStorage } from '@/store/middleware/sessionStorageMiddleware';
import { resetSession } from '@/store/slices/sessionSlice';
import { resetUi } from '@/store/slices/uiSlice';
import { resetNotifications } from '@/store/slices/notificationsSlice';
import { api } from '@/store/services/api';

function Providers({ children }) {
  const store = useAppStore();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/logout') {
      store.dispatch(api.util.resetApiState());
      store.dispatch(resetSession());
      store.dispatch(resetUi());
      store.dispatch(resetNotifications());
      clearSessionStorage();
    }
  }, [pathname, store]);

  return (
    <ReduxProvider store={store}>
      <ThemeProvider attribute="data-theme" defaultTheme="light" enableSystem={false}>
        <SWRConfig value={{ fetcher: (resource, init) => fetch(resource, init).then((res) => res.json()) }}>
          {children}
        </SWRConfig>
      </ThemeProvider>
    </ReduxProvider>
  );
}

export default Providers;
