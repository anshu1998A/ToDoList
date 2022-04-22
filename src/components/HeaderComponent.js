import React from 'react'
import { Text, View } from 'react-native'


function HeaderComponent({
  leftHeader = false,
  rightHeader = false,
  centerHeader = false,
  name = "",
}) {



  return (
    <View style={{backgroundColor:'red'}}>
      {
        leftHeader && (
          <Text>{name}</Text>
        )
      }
    </View>
  )
}

export default HeaderComponent