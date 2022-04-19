import { StyleSheet } from 'react-native'
import { moderateScale, moderateScaleVertical, textScale } from '../../styles/responsiveSize';
import fontFamily from '../../styles/fontFamily';

export default logInStyle = StyleSheet.create({

    logInMain: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },

    logInHeading: {
        fontSize: moderateScale(20),
        // fontWeight: '700',
        color: '#7d9ac9',
        fontFamily:fontFamily.MULISh_BOLD
        
    },

    userInput: {
        borderColor: "black",
        borderWidth: moderateScale(2),
        marginTop: moderateScale(10),
        borderRadius: moderateScale(5),
        height: moderateScale(30),
    },
    logInView:
    {
  
        alignItems: 'center',
        backgroundColor: 'orange',
        borderRadius: moderateScale(4),
        margin: moderateScale(10),
        justifyContent: 'center',
        width: moderateScale(250),
        height: moderateScale(40),
        alignSelf: 'center'
    }
    ,

    logInText:
    {
        fontSize: textScale(18),
        //  fontWeight: '600',
         color:"black",
         fontFamily:fontFamily.MULISH_REGULAR
    },

});
