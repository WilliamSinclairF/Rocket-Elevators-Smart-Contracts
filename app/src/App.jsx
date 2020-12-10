import React from 'react';
import { DrizzleContext } from '@drizzle/react-plugin';
import { Drizzle } from '@drizzle/store';
import drizzleOptions from './drizzleOptions';
import QualityTestsWithDrizzle from './Components/QualityTestsWithDrizzle';
import './App.css';
import { CircularProgress, Container, Typography } from '@material-ui/core';
import store from './middleware/middleware';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const drizzle = new Drizzle(drizzleOptions, store);

const App = () => {
  return (
    <DrizzleContext.Provider drizzle={drizzle}>
      <DrizzleContext.Consumer>
        {drizzleContext => {
          const { drizzle, drizzleState, initialized } = drizzleContext;

          if (!initialized) {
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

          return (
            <>
              <ToastContainer />
              <QualityTestsWithDrizzle
                drizzle={drizzle}
                drizzleState={drizzleState}
              />
            </>
          );
        }}
      </DrizzleContext.Consumer>
    </DrizzleContext.Provider>
  );
};

export default App;
