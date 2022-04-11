import { View, Text, SafeAreaView, TextInput, Button, TouchableOpacity } from 'react-native'
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIN } from '../../redux/actions/auth';
import TextInputComponent from '../../components/textInput';
import logInStyle from './logInStyle';
import commonStyles from '../../styles/pageStyle'



export default function logIn() {

    const [emailEnter, SetEmailEnter] = useState('');
  const [passwordEnter, setPasswordEnter] = useState('');

  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);
  const emailRegex = /^[\w-\.\_\$]+@([\w]{3,5}\.)[\w]{2,4}$/;
  const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%\^&\*])(?=.{8,})");

  const logInFun = () => {
    if (emailRegex.test(emailEnter)) {
      setEmail(false)
      if (strongRegex.test(passwordEnter)) {
        setPassword(false)
        dispatch(logIN())
      }
      else {
        setPassword(true)
      }

    }
    else {
      setEmail(true)
      setPassword(true)
    }
  }

    const dispatch = useDispatch()

    return (

        <View style={logInStyle.logInMain} >

            <Text style={logInStyle.logInHeading}> LOGIN to your Account</Text>
            <TextInputComponent
                placeholder={'Enter your user Name'}
                onchangeText={(event) => SetEmailEnter(event)}
            />
            {
                email ? <Text  style={commonStyles.errorText} >Email should not be empty</Text> : null
            }

            <TextInputComponent
                placeholder={'Enter your password'}
                onchangeText={
                    (value) => setPasswordEnter(value)
                }
            />
            {
                password ? <Text style={commonStyles.errorText} >password should not be empty</Text> : null
            }
            <TouchableOpacity onPress={() => logInFun()}>
                <View style={logInStyle.logInView}>
                    <Text style={logInStyle.logInText} >LOGIN</Text>
                </View>
            </TouchableOpacity>

        </View>
    )
}