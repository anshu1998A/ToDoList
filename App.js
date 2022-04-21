import React, { useEffect } from 'react';
import Route from './src/navigations/route';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { getData, getLogin } from './src/utils/utils';
import types from './src/redux/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import strings from './src/constants/lang';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { requestUserPermission,  notificationListener } from './src/utils/notificationServices';

const { dispatch } = store;

export default function App() {
  useEffect(() => {

    requestUserPermission()
    notificationListener()
    getLang()
    GoogleSignin.configure()
    getLogin().then((res) => {
      dispatch({
        type: types.LOGIN,
        payload: res
      })
    })

    getData().then((res) => {
      if (!!res) {
        dispatch({
          type: types.USER_DATA,
          payload: res
        })
      }
    })
  }, [])


  const getLang = async () => {
    try {
      const lang = await AsyncStorage.getItem('language')
      if(!!lang){
        strings.setLanguage(lang)
      }
      else{
        strings.setLanguage('en')
      }
    } catch (error) {
      
    }
  }
  return (

    <Provider store={store}>
      <Route />
    </Provider>

  )
}


