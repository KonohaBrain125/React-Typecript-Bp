import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store as _store } from '@/stores/store';
import { PageSpinner } from '@/components/Elements/Spinner/PageSpinner';
import { ErrorFallback } from '@/pages/ErrorFallback/ErrorFallback';
import { AuthProvider } from '@/features/auth';
import { AlertProvider } from '@/providers/AlertProvider';
import { ConfirmProvider } from 'material-ui-confirm';

import { AppProviderProps } from './types';

export const AppProvider = ({ children, store = _store }: AppProviderProps) => {
  return (
    <React.Suspense fallback={<PageSpinner />}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <HelmetProvider>
          <AlertProvider>
            <ConfirmProvider>
              <Provider store={store}>
                <AuthProvider>
                  <BrowserRouter>{children}</BrowserRouter>
                </AuthProvider>
              </Provider>
            </ConfirmProvider>
          </AlertProvider>
        </HelmetProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
};
