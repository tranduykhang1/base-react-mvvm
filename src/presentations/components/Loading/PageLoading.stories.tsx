import { Backdrop, CircularProgress } from '@mui/material';
import { withKnobs } from '@storybook/addon-knobs';
import PageLoading from './PageLoading';

export default {
  title: 'Components/PageLoading',
  component: PageLoading,
  decorators: [withKnobs],
};

const Template = (args) => (
  <Backdrop
    sx={{
      backgroundColor: args.backgroundColor,
      color: args.color,
      zIndex: (theme) => theme.zIndex.drawer + 1,
    }}
    open={args.open}
  >
    <CircularProgress color="inherit" />
  </Backdrop>
);

export const Default = Template.bind({});
Default.args = {
  backgroundColor: 'white',
  color: 'primary',
  open: true,
};