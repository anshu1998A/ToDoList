import AsyncStorage from "@react-native-async-storage/async-storage"

  export const saveData = async(data) =>{
    try {
      let jsonValue =JSON.stringify(data)
      await AsyncStorage.setItem('myList', jsonValue)
    } catch (e) {
      console.log("error rasied to store data")
      // saving error
    }
  }



  export const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('myList')
        let jsonValue =JSON.parse(value)
        return jsonValue
    } catch(e) {
      // error reading value
    }
  }