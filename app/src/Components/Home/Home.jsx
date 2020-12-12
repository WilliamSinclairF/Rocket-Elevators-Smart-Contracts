import { Container, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import ConnectToMetaMask from '../shared/ConnectToMetaMask';
import Actions from './Actions';

const useStyles = makeStyles({
  Box: {
    margin: '2vh 2vh 0vh 0vh',
  },
  Container: {
    margin: '2vh 2vh 0vh 0vh',
  },
  Form: {
    display: 'flex',
    justifyContent: 'center',
  },
});

export default function Home() {
  const classes = useStyles();
  return (
    <Container className={classes.Container}>
      <Typography variant={'h3'} align='center'>
        Rocket Elevators - Supply Chain Portal
      </Typography>
      <br />
      <Typography variant={'subtitle1'} align='center'>
        If you aren't already connected to MetaMask, click here to do so: <br />
        <ConnectToMetaMask size={'64'} />
      </Typography>
      <hr />
      <Actions />
    </Container>
  );
}
