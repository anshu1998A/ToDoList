import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import React from 'react';
import colors from '../styles/colors';
import fontFamily from '../styles/fontFamily';

const TextInputComponent = ({
    placeholder = '',
    placeholderTextColor = '',
    onchangeText, valuee
    
}) => {
    return (
        <View style={styles.viewcss}>

            <View style={{flex:1, justifyContent:'center'}} >
                <TextInput placeholder={placeholder}
                 placeholderTextColor={placeholderTextColor} 
                 style={styles.inputtext} 
                 onChangeText={onchangeText}
                  value={valuee} 
                  />
            </View>

            


        </View>
    )
}


const styles = StyleSheet.create({

    image: {
        height: 30,
        width: 30,
        margin: 5,

    },
    viewcss: {
        
        borderBottomColor:colors.black,
        borderWidth:1,
        width:300,
        margin:10,
        paddingHorizontal:9,
        height:35,
        justifyContent:'center',
        borderRadius:6

    },
    inputtext: {
        color:'black',
        padding:0.5,
        fontFamily: fontFamily.MULISH_REGULAR
        
    },

})

export default TextInputComponent