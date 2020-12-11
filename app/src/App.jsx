import React from 'react';
import { DrizzleContext } from '@drizzle/react-plugin';
import { Drizzle } from '@drizzle/store';
import drizzleOptions from './drizzleOptions';
import QualityTestsWithDrizzle from './Components/QualityTests/QualityTestsWithDrizzle';
import { ToastContainer } from 'react-toastify';
import store from './middleware/middleware';
import 'react-toastify/dist/ReactToastify.css';
import Loading from './Components/shared/Loading';
import './App.css';

const drizzle = new Drizzle(drizzleOptions, store);

const App = () => {
  return (
    <DrizzleContext.Provider drizzle={drizzle}>
      <DrizzleContext.Consumer>
        {drizzleContext => {
          const { drizzle, drizzleState, initialized } = drizzleContext;
          return !initialized ? <Loading /> : (
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
