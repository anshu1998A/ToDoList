import { View, Text, Image } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { styles } from './styles';




export default function About() {

  const userStatus = useSelector(state => state.userStatus.userData);
  console.log(userStatus, "Abour screen data========");
  const email = userStatus?.email
  const name = userStatus?.name
  const image = userStatus?.photo
  console.log("picture",image)
  console.log("email",email)
  const userDtaId = userStatus?.id
    
  return (
    <View>
    <Text style={styles.aboutText}>{userDtaId}</Text>
    <Text style={ styles.aboutText}>{email}</Text>
    <Text style={styles.aboutText}>{name}</Text>
    {/* <Image source={require(image)}/> */}
    </View>
  )
}