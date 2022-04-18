import { StyleSheet } from 'react-native';
import fontFamily from '../../styles/fontFamily';
import { moderateScale, moderateScaleVertical, textScale } from '../../styles/responsiveSize';


export default homeStyle = StyleSheet.create({
    homeView: {
        flex: 1,
        marginLeft: moderateScale(10)

    },
    homeText: {
        fontSize: textScale(20),
        // fontWeight: '700',
        fontFamily:fontFamily.MULISh_BOLD,
        color: 'black',
        marginRight: moderateScaleVertical(20),
        marginTop: moderateScale(10)
    },
    addDataText: {
        color: 'black',
        fontSize: textScale(20),
    },
    addButton: {
        height: moderateScale(40),
        width: moderateScale(40),
        borderRadius:moderateScale(20),
        alignSelf: 'center',
        marginBottom: moderateScaleVertical(30)
    },
    logOutView: {
        marginRight: moderateScale(10)
    },
    logOutText: {
        fontSize: textScale(20),
        // fontWeight: '700',
        fontFamily:fontFamily.MULISh_BOLD,
        color: 'orange',
        marginRight: moderateScaleVertical(20),
        marginTop: moderateScale(10)
    },
    detailsMain: {
        backgroundColor: '#c9c8c5',
        borderRadius: moderateScale(9),
        marginVertical: moderateScaleVertical(20),
        borderColor: 'orange',
        borderWidth: 1,
        marginHorizontal: moderateScale(10),
        justifyContent: 'space-between',
        shadowColor: 'orange',
        shadowOpacity: 1
    },
    editMainView: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginHorizontal: moderateScale(20),
        shadowColor: 'grey',
        shadowOpacity: 1
    },
    deleteButton: {
        height: moderateScale(40),
        width: moderateScale(40),
        marginRight: moderateScaleVertical(10),
        borderRadius: moderateScale(20),
        marginTop: moderateScaleVertical(10)
    },
    editTextView: {
        backgroundColor: 'white',
        height:moderateScale(25),
        marginTop: moderateScaleVertical(20),
        marginBottom: moderateScaleVertical(10),
        paddingBottom: moderateScaleVertical(20),
    },
    editText: {
        height: moderateScale(40),
        fontSize: textScale(20),
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        fontFamily: fontFamily.MULISH_REGULAR,
        color: 'black'
    },
    savedData: {
        marginLeft: moderateScale(10),
        marginBottom: moderateScaleVertical(5),
        fontFamily: fontFamily.MULISH_REGULAR,
        color:'black'
    }
})