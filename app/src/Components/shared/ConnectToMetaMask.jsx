import { IconButton } from '@material-ui/core';
import React from 'react';
import { loadWeb3 } from '../../loadWeb3';
import MetamaskIcon from '../../assets/metamask.svg';

export default function ConnectToMetaMask({ size }) {
  return (
    <IconButton edge='start' aria-label='home' onClick={() => loadWeb3()}>
      <img src={MetamaskIcon} height={size} alt='metamask icon' />
    </IconButton>
  );
}
