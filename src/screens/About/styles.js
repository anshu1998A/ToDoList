// import { StyleSheet } from 'react-native'


// export const styles = StyleSheet.create({
//     aboutText: {
//         color: 'green',
//     }
// });


import { StyleSheet } from 'react-native';
import { moderateScale, moderateScaleVertical, textScale } from '../../styles/responsiveSize';

export const styles = StyleSheet.create({

    aboutText: {
        color: 'green',
        fontSize: textScale(20),
    //    marginHorizontal: moderateScale(10),
       marginLeft:  moderateScale(10)
    }
});

