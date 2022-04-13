import { View, Text, SafeAreaView } from 'react-native'
import React from 'react';
import logIn from './src/screens/logIn/logIn';
import Route from './src/navigations/route';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import * as auth from './src/redux/actions/auth';
import * as addSetails from './src/redux/actions/addDetails'
export default function App() {

// const arg = {
//   name: 'anshu',
//   roll: 2,
//   age: 23
// }
// console.log({...auth})
// console.log({...addSetails})

  return (

    <Provider store={store}>
      <Route/>
    </Provider>
    
  )
}


//import liraries
// import React, { Component, useEffect } from 'react';
// import { View, Text, StyleSheet,Button } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { getData, saveData } from './src/utils/utils';

// // create a component
// const App = () => {




// useEffect(()=>{
//   saveData([{name: 'dklfjdkfdkfjk'}])
// },[])






//   const removeData = async() =>{
//     try {
//         await AsyncStorage.removeItem('todoList')
//     } catch (error) {
      
//     }
//   }
  

//   const fetchData = () =>{
//     getData().then((res)=>{

//       console.log("value",res)
//     })


//   }

//   return (
//     <View style={styles.container}>
//       <Text>App</Text>

   

// <Button 
//         title='Get Data '
//         onPress={fetchData}
//       />

//     </View>
//   );
// };

// // define your styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#2c3e50',
//   },
// });

// //make this component available to the app
// export default App;
