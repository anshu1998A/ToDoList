import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import React from 'react';
import colors from '../styles/colors';

const TextInputComponent = ({
    placeholder = '',
    placeholderTextColor = '',
    onchangeText, valuee
    
}) => {
    return (
        <View style={styles.viewcss}>

            <View>
                <TextInput placeholder={placeholder} placeholderTextColor={placeholderTextColor} style={styles.inputtext} onChangeText={onchangeText} value={valuee} />
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
        // backgroundColor: 'grey',
        borderBottomColor:colors.black,
        borderWidth:1,
        width:300,
        margin:10,
        paddingHorizontal:9,
        height:35,
        justifyContent:'center',
        // alignItems:'center',
        // alignContent:'center',
        borderRadius:6

    },
    inputtext: {

        
    },

})

export default TextInputComponent