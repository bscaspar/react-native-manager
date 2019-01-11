import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { SafeAreaView, Text } from 'react-native';
import firebase from 'firebase';

import reducers from './reducers';

class App extends Component {

  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyDTYGkI-3MIjWCV4CReMjawgQOkvprTXj8',
      authDomain: 'manager-924d5.firebaseapp.com',
      databaseURL: 'https://manager-924d5.firebaseio.com',
      projectId: 'manager-924d5',
      storageBucket: 'manager-924d5.appspot.com',
      messagingSenderId: '629144525573'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <SafeAreaView>
          <Text>
            Hello!
          </Text>
        </SafeAreaView>
      </Provider>
    );
  }
}

export default App;