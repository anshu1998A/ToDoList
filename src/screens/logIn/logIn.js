import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react';
import { useState } from 'react';
import TextInputComponent from '../../components/textInput';
import logInStyle from './logInStyle';
import commonStyles from '../../styles/pageStyle'
import actions from '../../redux/actions';
import RNRestart from 'react-native-restart';
import strings, { changeLanguage } from '../../constants/lang';
import Modal from "react-native-modal";
import { moderateScale } from '../../styles/responsiveSize';
import colors from '../../styles/colors';


export default function LogIn() {


  const [emailEnter, SetEmailEnter] = useState('Anshu@gmail.com');
  const [passwordEnter, setPasswordEnter] = useState('Anmf@1245');
  const [email, setEmail] = useState(false);
  const [errorMail, setErrorMail] = useState(false)
  const [password, setPassword] = useState(false);
  const [modal, setModal] = useState(false);
  const emailRegex = /^[\w-\.\_\$]+@([\w]{3,5}\.)[\w]{2,4}$/;
  const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%\^&\*])(?=.{8,})");




  // ********************************************************SHOW MODAL FUNCTION************************************************************
  const showModal = () => {
    setModal(() => !modal);
  }



  const logInFun = (data) => {
    if (emailEnter != 0) {
      setErrorMail(false)
      if (emailRegex.test(emailEnter)) {
        setEmail(false)
        if (strongRegex.test(passwordEnter)) {
          setPassword(false)
          actions.logIN(data)
          // dispatch(logIN())
        }
        else {
          setPassword(true)
        }

      }
      else {
        setEmail(true)
      }
    }
    else{
      setErrorMail(true)
    }
  }

  // *******************************************************************CAHNGE LANGUAGE********************************************************************
  const changeLang = (val) => {
    changeLanguage(val)
    RNRestart.Restart()
  }




  return (

    <View style={logInStyle.logInMain} >

      <Text style={logInStyle.logInHeading}>{strings.LOGIN_TO_YOUR_ACCOUNT}</Text>
      <TextInputComponent
        placeholder={strings.ENTER_YOUR_USER_NAME}
        placeholderTextColor={colors.blackC}
        onchangeText={(event) => SetEmailEnter(event)}
        valuee={emailEnter}
      />
      {
        email ? <Text style={commonStyles.errorText} >{strings.EMAIL_SHOULD_NOT_BE_EMPTY}</Text> : null
      }
      {
        errorMail ? <Text style={commonStyles.errorText} >{strings.EMAIL_SHOULD_NOT_BE_EMPTY}</Text> : null
      }

      <TextInputComponent
        placeholder={strings.ENTER_YOUR_PASSWORD}
        placeholderTextColor={colors.blackC}
        onchangeText={
          (value) => setPasswordEnter(value)
        }
        valuee={passwordEnter}
      />
      {
        password ? <Text style={commonStyles.errorText} >{strings.PASSWORD_SHOULD_NOT_BE_EMPTY}</Text> : null
      }
      <TouchableOpacity onPress={() => logInFun([{ email, password }])}>
        <View style={logInStyle.logInView}>
          <Text style={logInStyle.logInText}>{strings.LOGIN}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => showModal()}>
        <View style={logInStyle.logInView}>
          <Text style={logInStyle.logInText} >change lang</Text>
        </View>
      </TouchableOpacity>

      {/* ************************************************************MODAL TO SELECT THE LAnGUAGE********************************************************** */}
      <Modal isVisible={modal}>
        <SafeAreaView style={{ backgroundColor: 'white', height: moderateScale(400) }}>
          <TouchableOpacity onPress={() => changeLang('fr')}>
            <View style={logInStyle.logInView}>
              <Text style={logInStyle.logInText} >change lang(FR)</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeLang('en')}>
            <View style={logInStyle.logInView}>
              <Text style={logInStyle.logInText} >change lang(EN)</Text>
            </View>
          </TouchableOpacity>
        </SafeAreaView>

      </Modal>

    </View>
  )
}