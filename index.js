import React from 'react';
import {AppRegistry} from 'react-native';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {Provider} from 'react-redux';
import reducer from '@/models/reducer';
import App from './src/navigator';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

function importAllSaga(r, cb) {
  r.keys().forEach(key => cb.run(r(key).default));
}
//加载所有saga
const sagas = require.context('./src/models/sage', true, /\.ts$/); // require.context 是webapck提供的，需要自己引入 babel-plugin-transform-require-context 支持
importAllSaga(sagas, sagaMiddleware);

const Home = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Home);
