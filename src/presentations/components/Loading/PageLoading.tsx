import { Backdrop, CircularProgress } from '@mui/material';

export default function PageLoading() {
  return (
    <Backdrop
      sx={{
        backgroundColor: 'white',
        color: 'primary',
        zIndex: (theme) => theme.zIndex.drawer + 1
      }}
      open={true}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
