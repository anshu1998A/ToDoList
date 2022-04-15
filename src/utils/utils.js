import AsyncStorage from "@react-native-async-storage/async-storage"


export const saveState = async (detailsList) => {
  try {
    const initState = JSON.stringify(detailsList);
    await AsyncStorage.setItem('data_key', initState);
    console.log('Data is stored in store')
    return initState
  } catch (error) {
    console.log('data is not svaed')
  }
}

export const getData = async () => {
  try {
    const newData = await AsyncStorage.getItem('data_key');
    console.log("new Data is uyrhygmh", newData);
    return newData !=null ? JSON.parse(newData) : null
  } catch (error) {
    console.log("app screen get data error")
  }
}


export const saveLogin = async (data) => {
  try {
    const initState = JSON.stringify(data);
    await AsyncStorage.setItem('login_key', initState);
    console.log('Data is stored in store')
    return initState
  } catch (error) {
    console.log('data is not svaed')
  }
}



export const getLogin = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('login_key')
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    console.log("login_data get error")
  }
}  


export const removeLogin = async() =>{
  try {
      await AsyncStorage.removeItem('login_key')
  } catch (error) {
    
  }
}

// export const saveData = async (data) => {
//   try {
//     let jsonValue = JSON.stringify(data)
//     await AsyncStorage.setItem('myList', jsonValue)
//   } catch (e) {
//     console.log("error rasied to store data")
//     // saving error
//   }
// }


// export const getData = async () => {
//   try {
//     const value = await AsyncStorage.getItem('myList')
//     let jsonValue = JSON.parse(value)
//     return jsonValue
//   } catch (e) {
//     // error reading value
//   }
// }


// // const [name, setName] = useState('')

// // useEffect(() => {
// //   saveData([{ name: 'dklfjdkfdkfjk' }])
// // }, [])
// export const fetchData = async() => {
//   try {
    
//   } catch (error) {
    
//   }


// }
