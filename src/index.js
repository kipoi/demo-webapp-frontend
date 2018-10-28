import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import configureStore from './store';

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();