import React, { Component } from "react";
//import { Text, View } from 'react-native';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import firebase from "firebase";
import reducers from "./reducers";
//import LoginForm from './components/LoginForm';
import Router from "./Router";

class app extends Component {
  componentWillMount() {
    const config = {
      apiKey: "YOUR_API_KEY",
      authDomain: "ADD_YOUR",
      databaseURL: "ADD_YOUR",
      projectId: "YOUR",
      storageBucket: "YOUR",
      messagingSenderId: "YOUR"
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default app;
