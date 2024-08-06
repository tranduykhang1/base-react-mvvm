import CustomizedSnackbar from '@/components/Snackbars/CustomSnackbar';
import { AlertColor, SnackbarOrigin } from '@mui/material';
import { ReactNode, createContext, useState } from 'react';

interface SnackbarState extends SnackbarOrigin {
  open: boolean;
  message: string;
  severity: AlertColor;
}

export interface SnackbarContextProps {
  state: SnackbarState;
  showSnackbar: (message: string, severity: AlertColor) => void;
  closeSnackbar: () => void;
}

export const SnackbarContext = createContext<SnackbarContextProps | undefined>(
  undefined
);

export const SnackbarProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [state, setState] = useState<SnackbarState>({
    open: false,
    vertical: 'top',
    horizontal: 'right',
    message: '',
    severity: 'success'
  });

  const showSnackbar = (message: string, severity: AlertColor) => {
    setState({
      open: true,
      vertical: 'top',
      horizontal: 'right',
      message,
      severity
    });
  };

  const closeSnackbar = () => {
    setState((prevState) => ({
      ...prevState,
      open: false
    }));
  };

  return (
    <SnackbarContext.Provider value={{ state, showSnackbar, closeSnackbar }}>
      <CustomizedSnackbar />
      {children}
    </SnackbarContext.Provider>
  );
};
