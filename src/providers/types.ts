import { AppStore } from '@/stores/store';

export type AlertProviderProps = {
  children: React.ReactNode;
};

export interface AlertStateProps {
  isOpen: boolean;
  message: string;
  severity: 'success' | 'info' | 'warning' | 'error' | undefined;
}

export type AlertContextProps = {
  showAlert: ({ message, severity }: AlertStateProps) => void;
  hideAlert: () => void;
};

export type AppProviderProps = {
  children: React.ReactNode;
  store?: AppStore;
};
