import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import LogInPage from './containers/LogInPage';
import SignUpPage from './containers/SignUpPage';
import HomePage from './containers/HomePage';
import MyProfile from './containers/MyProfile';
import ContactPage from './containers/ContactPage';
import CartPage from './containers/CartPage';

import configureStore, { history } from './redux/store';

import Header from './components/Header';
import './App.css';
import AboutUsPage from './containers/AboutUsPage';

const store = configureStore();

const App: React.FC = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div className="container">
        <Header />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/login" component={LogInPage} />
          <Route path="/about-us" component={AboutUsPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/my-profile" component={MyProfile} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/cart" component={CartPage} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>
);

export default App;
