import React from 'react';
import ReactDOM from 'react-dom';
/**Redux part */
import { Provider } from 'react-redux';
import {createStore , applyMiddleware} from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import './index.css';
import App from './containers/App';

const middlaware = [thunk , createLogger(rootReducer)];

const store = createStore(rootReducer , {} , applyMiddleware(...middlaware) )

ReactDOM.render(
              <Provider store = {store}>
                <App />
              </Provider> , 
              document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

