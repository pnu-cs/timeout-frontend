import React from 'react';
import {Route, Switch, BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux'

import LogInPage from "./containers/LogInPage";
import SignUpPage from "./containers/SignUpPage";
import HomePage from "./containers/HomePage/index";
import MyProfile from "./containers/MyProfile";

import configureStore from "./redux/store";

import {Header} from "./components/Header";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Time Out
        </p>
      </header>
    </div>
  );
}

export default App;
