import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export const Alerts = ({ msg, severity }) => {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>

      <Alert variant="outlined" severity={severity}>
        {msg}
      </Alert>

    </Stack>
  );
}