import React from 'react';
import { CircularProgress } from '@material-ui/core';

export default function Loading() {
  return (
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
  );
}
