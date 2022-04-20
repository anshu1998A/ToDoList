import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'


export default function About() {

  const userStatus = useSelector(state => state.userStatus.userData);
  console.log(userStatus, "Abour screen data========");
  const email = userStatus?.email
  const userDtaId = userStatus?.id
    
  return (
    <View>
    <Text style={{color:'red'}}>{email}</Text>
    <Text style={{color:'red'}}>{userDtaId}</Text>
    </View>
  )
}