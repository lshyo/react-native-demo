import React from 'react';
import {AppRegistry} from 'react-native';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import saga from './src/models/saga';
import {Provider} from 'react-redux';
import reducer from '@/models/reducer';
import App from './src/navigator';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(saga);

const Home = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Home);
