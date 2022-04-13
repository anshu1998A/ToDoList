import {  StyleSheet } from 'react-native'


export default  logInStyle = StyleSheet.create ({

    logInMain:{ flex: 1, alignContent: 'center', alignItems: 'center', justifyContent: 'center' },

    logInHeading:{ fontSize: 20, fontWeight: '700', color:'#7d9ac9' },

    userInput:{
        borderColor:"black",
        borderWidth:2,
        marginTop: 10,
        borderRadius:5,
        height:30,
        width:200,
    },
    logInView:
        {
            alignContent: 'center', alignItems: 'center', backgroundColor: 'orange',
            borderRadius: 4, margin: 10,
            justifyContent: 'center',
            width: 150, height: 40, alignSelf: 'center'
        }
    ,

    logInText:
        { fontSize: 18, fontWeight:'600' 
    },
   
});
