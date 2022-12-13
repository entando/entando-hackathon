import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export function Loading() {
  return (
    <Box sx={{ width: '100%', height: '100%', marginTop: "20%" }}>
      <LinearProgress />
    </Box>
  );
}