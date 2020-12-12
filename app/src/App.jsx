import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { DrizzleContext } from '@drizzle/react-plugin';
import { Drizzle } from '@drizzle/store';
import drizzleOptions from './drizzleOptions';
import { ToastContainer } from 'react-toastify';
import store from './middleware/middleware';
import Loading from './Components/shared/Loading';
import { loadWeb3 } from './loadWeb3';
import QualityTestDrizzle from './Components/QualityTests/QualityTestDrizzle';
import MaterialProviderDrizzle from './Components/MaterialProvider/MaterialProviderDrizzle';
import 'react-toastify/dist/ReactToastify.css';
import './assets/App.css';
import Home from './Components/Home/Home';

const drizzle = new Drizzle(drizzleOptions, store);

const App = () => {
  useEffect(() => {
    (async () => {
      await loadWeb3();
    })();
  }, []);

  return (
    <DrizzleContext.Provider drizzle={drizzle}>
      <DrizzleContext.Consumer>
        {drizzleContext => {
          const { drizzle, drizzleState, initialized } = drizzleContext;
          return !initialized ? (
            <Loading />
          ) : (
            <>
              <ToastContainer />
              <Route exact path='/quality'>
                <QualityTestDrizzle
                  drizzle={drizzle}
                  drizzleState={drizzleState}
                />
              </Route>
              <Route exact path='/materials'>
                <MaterialProviderDrizzle
                  drizzle={drizzle}
                  drizzleState={drizzleState}
                />
              </Route>
              <Route exact path='/'>
                <Home />
              </Route>
            </>
          );
        }}
      </DrizzleContext.Consumer>
    </DrizzleContext.Provider>
  );
};

export default App;
