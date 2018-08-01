import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import Login from './Components/Login/Login';
import allReducers from './reducers';
import logger from 'redux-logger';

const store = createStore(
    allReducers,
    applyMiddleware(logger)
);

ReactDOM.render(
<Provider store={store}>
    <Login />
</Provider>, document.getElementById('root'));
