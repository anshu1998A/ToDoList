import { View, Text } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import MainStack from './mainStack';
import AuthStack from './authStack';

const Stack = createStackNavigator();


export default function route() {

const userStatus = useSelector(state => state.userStatus);

  return (
    <NavigationContainer>
        <Stack.Navigator>
           {userStatus ? MainStack(Stack) : AuthStack(Stack)}
        </Stack.Navigator>
    </NavigationContainer>
  )
}