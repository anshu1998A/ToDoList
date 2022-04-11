import { View, Text } from 'react-native'
import React from 'react'
import navigationString from './navigationString'
import home from '../screens/home/home'
import addTask from '../screens/addTask/addTask'


export default function mainStack(Stack) {
  return (
    <>
    <Stack.Screen name = {navigationString.HOME} component = {home}/>
    <Stack.Screen name = {navigationString.ADD_DETAILS} component = {addTask}/>
    {/* <Stack.Screen name = {navigationString.HOME} */}
    </>
  )
}