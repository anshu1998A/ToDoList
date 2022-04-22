
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import MainStack from './mainStack';
import AuthStack from './authStack';


const Stack = createStackNavigator();


export default function route() {

const userStatus = useSelector(state => state.userStatus.userData);


  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
           {userStatus != null ? MainStack(Stack) : AuthStack(Stack)}
        </Stack.Navigator>
    </NavigationContainer>
  )
}