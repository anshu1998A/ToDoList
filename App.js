import React, { useEffect } from 'react';
import Route from './src/navigations/route';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { getData, getLogin } from './src/utils/utils';
import types from './src/redux/types';

const {dispatch} = store;

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


