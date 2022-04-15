import React, { useEffect } from 'react';
import Route from './src/navigations/route';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { getData, getLogin } from './src/utils/utils';
import types from './src/redux/types';

const {dispatch} = store

export default function App() {
  useEffect(() => {

    getLogin().then((res) => {
      dispatch({
        type: types.LOGIN,
        payload: res
      })
    })

    getData().then((res) =>{
      if(!!res){
        dispatch({
          type: types.USER_DATA,
          payload: res
        })
      }
    })
      },[])

  return (

    <Provider store={store}>
      <Route/>
      
    </Provider>
    
  )
}


// // import liraries
// import React, { Component, useEffect , useState} from 'react';
// import { View, Text, StyleSheet,Button } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// 

// // create a component
// const App = () => {


// const [name, setName] = useState('')

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
//       setName(res[0].name)
//     })
//   }

//   return (
//     <View style={styles.container}>
//       <Text>App</Text>

//    <Text>{name}</Text>
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
