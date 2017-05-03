import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { IndexRoute, Route, Router, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import Layout from './components/Layout';
import AppContainer from './containers/AppContainer';

import configureStore from './store/configureStore';

const store = configureStore({});

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
   <div>
      <Provider store={ store }>
         <Router history={ history }>
            <Route path='/' component={ Layout }>
               <Route path='app' component={ AppContainer } />
            </Route>
         </Router>
      </Provider>
   </div>,
   document.getElementById('App')
);