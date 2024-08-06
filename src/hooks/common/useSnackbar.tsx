import {
  SnackbarContext,
  SnackbarContextProps
} from '@/providers/SnackbarProvider';
import { useContext } from 'react';

export const useSnackbar = (): SnackbarContextProps => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error('useSnackbar must be used within a SnackbarProvider');
  }
  return context;
};
