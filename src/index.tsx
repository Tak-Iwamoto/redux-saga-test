import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './reducers/rootReducer';
import rootSaga from './sagas/rootSaga';
import 'semantic-ui-css/semantic.min.css';

import App from './App';
import * as serviceWorker from './serviceWorker';
// for redux-saga-debug
/* eslint-disable no-underscore-dangle, @typescript-eslint/no-explicit-any */
// const composeEnhancers =
//   process.env.NODE_ENV === 'development' &&
//   typeof window === 'object' &&
//   (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
//     : compose;
/* eslint-enable */

const sagaMiddleware = createSagaMiddleware();
// const enhancer = composeEnhancers(applyMiddleware(sagaMiddleWare));
// const store = createStore(videoReducer, enhancer);
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
sagaMiddleware.run(rootSaga);
