import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import plannerReducer from './store/reducers/planner';
import filmReducer from './store/reducers/film';
import camerasReducer from './store/reducers/cameras';
import shootsReducer from './store/reducers/shoots'

import { watchCameras, watchFilmList, watchShoots } from './store/sagas/';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

const rootReducer = combineReducers({
  planner: plannerReducer,
  film: filmReducer,
  cameras: camerasReducer,
  shoots: shootsReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchCameras);
sagaMiddleware.run(watchFilmList);
sagaMiddleware.run(watchShoots);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(
  app,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
