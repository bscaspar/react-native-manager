import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';
import RouterComponent from './Router';

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyDTYGkI-3MIjWCV4CReMjawgQOkvprTXj8',
      authDomain: 'manager-924d5.firebaseapp.com',
      databaseURL: 'https://manager-924d5.firebaseio.com',
      projectId: 'manager-924d5',
      storageBucket: 'manager-924d5.appspot.com',
      messagingSenderId: '629144525573',
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <RouterComponent />
      </Provider>
    );
  }
}

export default App;
