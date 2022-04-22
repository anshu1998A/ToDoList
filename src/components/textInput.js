import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import React from 'react';
import colors from '../styles/colors';
import fontFamily from '../styles/fontFamily';
import { moderateScale } from '../styles/responsiveSize';

const TextInputComponent = ({
    placeholder = '',
    placeholderTextColor = '',
    onchangeText, valuee, icon,
    leftIcon = false,
    ...props
}) => {
    return (
        <View style={styles.viewcss}>
            {leftIcon && (

                <View style={{ justifyContent: 'center', alignItems: 'center', padding: moderateScale(5)}}>
                    <Image source={icon} style={{ height: moderateScale(25), width: moderateScale(25),  padding: moderateScale(5) }} />
                </View>
            )}
            <TextInput 
             {...props}
            placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                style={styles.inputtext}
                onChangeText={onchangeText}
                value={valuee}
            />





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

        borderBottomColor: colors.black,
        borderWidth: 1,
        width: 300,
        margin: 10,
        // paddingHorizontal: 9,
        height: 35,

        flexDirection: "row",
        borderRadius: 6

    },
    inputtext: {
        color: 'black',
        padding: 0.5,
        flex: 1,
        // marginLeft:12,
        // backgroundColor: "green",
        fontFamily: fontFamily.MULISH_REGULAR

    },

})

export default TextInputComponent