import React from 'react';
import {Router, Redirect, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';

import {UserListPage} from './components/UserListPage';
import {UserCreatePage} from './components/UserCreatePage';
import {store, history} from './redux/rootReducer';
import './i18n';

const App = () => {
  return (
      <>
          <Provider store={store}>
              <Router history={history}>
                <Switch>
                  <Route path="/users" exact component={UserListPage} />
                  <Route path="/users/create" exact component={UserCreatePage} />

                  // Redirect all 404's to home
                  <Redirect to='/users' />
                </Switch>
              </Router>
          </Provider>
      </>
  );
};

export default App;
