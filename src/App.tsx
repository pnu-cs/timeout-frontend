import React from 'react';
import { ConnectedRouter } from 'connected-react-router'
import {Route, Switch} from "react-router-dom";
import { Provider } from 'react-redux'

import LogInPage from "./containers/LogInPage";
import SignUpPage from "./containers/SignUpPage";
import HomePage from "./containers/HomePage/index";
import MyProfile from "./containers/MyProfile";
import ContactPage from "./containers/ContactPage/index";

import configureStore, { history } from "./redux/store";

import Header from "./components/Header";
import './App.css';

const store = configureStore();

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <div className="container">
                    <Header />
                    <Switch>
                        <Route path="/" component={HomePage} exact />
                        <Route path="/login" component={LogInPage} />
                        <Route path="/signup" component={SignUpPage} />
                        <Route path="/my-profile" component={MyProfile} />
                        <Route path="/contact" component={ContactPage} />
                    </Switch>
                </div>
            </ConnectedRouter>
        </Provider>
    )
}

export default App;
