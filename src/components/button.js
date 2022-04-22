import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { moderateScale } from '../styles/responsiveSize';
import fontFamily from '../styles/fontFamily';

const  ButtonComponent = ({
buttonText = '',
dynamicStyle= false,
btn=false,
onpress,
style={},
}) => {
return(
   <TouchableOpacity  onPress={onpress}>
       { dynamicStyle && (<View style={{...buttonStyles.buttonView,...style}}>
       <Text style={{fontSize:20, color:'black', fontFamily: fontFamily.MULISH_REGULAR}}> {buttonText} </Text>
       </View>)}
       {/* { btn && (<View style={buttonStyles.btn}>
       <Text style={{fontSize:20, color:'black', fontFamily: fontFamily.MULISH_REGULAR}}> {buttonText} </Text>
       </View>)} */}
   </TouchableOpacity>
)

}

const buttonStyles = StyleSheet.create({
buttonView:{
    alignItems: 'center',
    backgroundColor: 'orange',
    borderRadius: moderateScale(4),
    margin: moderateScale(10),
    justifyContent: 'center',
    width: moderateScale(250),
    height: moderateScale(40),
    alignSelf: 'center',
    
    
},btn:{
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: moderateScale(4),
    margin: moderateScale(10),
    justifyContent: 'center',
    width: moderateScale(250),
    height: moderateScale(40),
    alignSelf: 'center',
    fontFamily: fontFamily.MULISh_BOLD
}

});
export default ButtonComponent;