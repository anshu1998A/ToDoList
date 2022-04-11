import { View, Text, SafeAreaView } from 'react-native'
import React from 'react';
import logIn from './src/screens/logIn/logIn';
import Route from './src/navigations/route';
import { Provider } from 'react-redux';
import store from './src/redux/store';

export default function App() {
  return (

    <Provider store={store}>
      <Route/>
    </Provider>
    
  )
}