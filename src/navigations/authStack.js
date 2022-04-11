import { View, Text } from 'react-native'
import React from 'react';
import LogIn from '../screens/logIn/logIn';

import navigationString from './navigationString';

export default function authStack(Stack) {
  return (
    <>
   <Stack.Screen name ={navigationString.LOGIN} component = {LogIn}/>
    </>
  )
}