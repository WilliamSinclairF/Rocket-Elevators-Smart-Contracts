import React from 'react';
import { CircularProgress, Container, Typography } from '@material-ui/core';

export default function Loading() {
  return (
    <Container>
      <Typography variant={'h3'} align={'center'}>
        Loading data, please wait...
      </Typography>

      <CircularProgress
        size={100}
        style={{
          position: 'fixed',
          zIndex: 999,
          overflow: 'show',
          margin: 'auto',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}
      />
    </Container>
  );
}
