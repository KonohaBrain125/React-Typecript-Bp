import React, { createContext, useContext, useState } from 'react';
import { Snackbar, Alert } from '@mui/material';

import { AlertProviderProps, AlertStateProps, AlertContextProps } from './types';

const AlertContext = createContext<AlertContextProps | null>(null);

export const useAlert = () => {
  return useContext(AlertContext);
};

export const AlertProvider = ({ children }: AlertProviderProps) => {
  const [alertData, setAlertData] = useState<AlertStateProps>({
    isOpen: false,
    message: '',
    severity: 'success',
  });

  const showAlert = ({ message, severity }: AlertStateProps) => {
    setAlertData({
      isOpen: true,
      message,
      severity,
    });
  };

  const hideAlert = () => {
    setAlertData({
      isOpen: false,
      message: '',
      severity: 'success',
    });
  };

  return (
    <AlertContext.Provider value={{ showAlert, hideAlert }}>
      {children}
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={alertData.isOpen}
        autoHideDuration={3000}
        onClose={hideAlert}
      >
        <Alert onClose={hideAlert} severity={alertData.severity}>
          {alertData.message}
        </Alert>
      </Snackbar>
    </AlertContext.Provider>
  );
};
