import { View, Text, SafeAreaView } from 'react-native'
import React from 'react';
import logIn from './src/screens/logIn/logIn';
import Route from './src/navigations/route';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import * as auth from './src/redux/actions/auth';
import * as addSetails from './src/redux/actions/addDetails'
export default function App() {

// const arg = {
//   name: 'anshu',
//   roll: 2,
//   age: 23
// }
// console.log({...auth})
// console.log({...addSetails})

  return (

    <Provider store={store}>
      <Route/>
    </Provider>
    
  )
}