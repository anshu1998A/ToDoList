import { View, Text } from 'react-native'
import React from 'react';
// import LogIn from '../screens/logIn/LogIn';
import LogIn from '../screens/logIn/LogIn'
import navigationString from './navigationString';

export default function authStack(Stack) {
  return (
    <>
   <Stack.Screen name ={navigationString.LOGIN} component = {LogIn}/>
    </>
  )
}