import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const  ButtonComponent = ({
buttonText = '',
backgroundColor ="",
onpress,
}) => {
return(
   <TouchableOpacity  onPress={onpress}>
       <View style={buttonStyles.buttonView}>
       <Text style={{fontSize:20, color:'black'}}> {buttonText}</Text>
       </View>
   </TouchableOpacity>
)

}

const buttonStyles = StyleSheet.create({
buttonView:{
    backgroundColor:'orange',
    alignSelf:'center',
    alignItems:'center',
    justifyContent:'center',
    margin:20,
    width:100,
    borderRadius: 7,
}

});
export default ButtonComponent;