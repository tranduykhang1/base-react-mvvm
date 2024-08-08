import React from 'react';
import { SnackbarContext } from '@/providers/SnackbarProvider';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import CustomizedSnackbar from './CustomSnackbar';

export default {
  title: 'Components/CustomizedSnackbar',
  component: CustomizedSnackbar,
  decorators: [withKnobs],
  argTypes: {
    message: { control: 'text' },
    severity: { 
      control: 'select',
      options: ['success', 'error', 'info', 'warning']
    },
    vertical: { 
      control: 'select',
      options: ['top', 'bottom']
    },
    horizontal: { 
      control: 'select',
      options: ['left', 'center', 'right']
    },
  },
};

const Template = (args) => (
  <SnackbarContext.Provider
    value={{
      state: { ...args, open: true },
      closeSnackbar: action('closeSnackbar'),
    }}
  >
    <CustomizedSnackbar />
  </SnackbarContext.Provider>
);

export const Default = Template.bind({});
Default.args = {
  vertical: 'top',
  horizontal: 'right',
  message: 'This is a snackbar message',
  severity: 'success',
};
