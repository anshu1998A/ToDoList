import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react';
import TextInputComponent from '../../components/textInput';
import colors from '../../styles/colors';
import navigationString from '../../navigations/navigationString';
import ButtonComponent from '../../components/button';
import actions from '../../redux/actions';
import strings from '../../constants/lang';




export default function AddTask({ navigation, route }) {
  
  const USerID = route?.params?.userId
  const updateId = USerID?.dataId

  const [name, setName] = useState('Anshu')
  const [age, setAge] = useState('23')
  const [address, setAddress] = useState('HP')
  const [rollno, setRollno] = useState('2345678')
  const [phone, setPhoneNumber] = useState('7896352011')

  const [nameError, setNameError] = useState(false)
  const [ageError, setAgeErro] = useState(false)
  const [addressError, setAddressError] = useState(false)
  const [rollnoError, setRollnoError] = useState(false)
  const [phoneError, setPhoneNumberError] = useState(false)

  // console.log("my params",route?.params?.index)
  // console.log("my id", route?.params?.id)
  const dataId = Math.floor(Math.random() * 1000)
  const data = [{ dataId, name, age, rollno, phone, address }]

  // console.log('gfghfv', dataId)
  // console.log(data)
// console.log("USERID is :", USerID)
  useEffect(() => {
    if (USerID) {
      setName(USerID?.name)
      setAge(USerID?.age)
      setAddress(USerID?.address)
      setRollno(USerID?.rollno)
      setPhoneNumber(USerID?.phone)
    }
  }, [])


  const EditDetails = () => {
    if (name === '') {
      setNameError(true)
    }
    else if (age === '') {
      setAgeErro(true)
    }
    else if (rollno === '') {
      setRollnoError(true)
    }
    else if (phone === '') {
      setPhoneNumberError(true)
    }
    else if (address === '') {
      setAddressError(true)
    }
    else if (address != 0) {
      navigation.navigate(navigationString.HOME)
    }
    actions.editData({ updateId, name, age, rollno, address, phone })

  }


//*******************************************************On submit button action*************************************************************

  const submit = () => {

    if (name != '') {
      setNameError(false)
      if (age != 0) {
        setAgeErro(false)
        if (rollno != '') {
          setRollnoError(false)
          if (phone.length == 10) {
            setPhoneNumberError(false)
            if (address != 0) {
              setAddressError(false)
              console.log(data,"submit data");
              actions.saveEmployeeDetails(data)
              // saveState()
              navigation.navigate(navigationString.HOME)
            }
            else
              setAddressError(true)
          }
          else
            setPhoneNumberError(true)
        }
        else
          setRollnoError(true)
      }
      else
        setAgeErro(true)
    }
    else
      setNameError(true)
  }





  return (
    <SafeAreaView style={{ justifyContent: 'center', alignSelf: 'center' }} >
      <TextInputComponent
        placeholder={strings.ENTER_YOUR_NAME}
        placeholderTextColor={colors.blackC}
        onchangeText={(value) => setName(value)}
        valuee={name}
        
      />
      {
        nameError ? <Text> enter name</Text> : null
      }
      <TextInputComponent
        placeholder={strings.ENTER_YOUR_AGE}
        placeholderTextColor={colors.blackC}
        onchangeText={(value) => setAge(value)}
        valuee={age}
        keyboardType={'numeric'}

      />
      {
        ageError ? <Text> enter age </Text> : null
      }
      <TextInputComponent
        placeholder={strings.ENTER_YOUR_ROLL_NO}
        placeholderTextColor={colors.blackC}
        onchangeText={(value) => setRollno(value)}
        valuee={rollno}
        keyboardType={'numeric'}

      />
      {
        rollnoError ? <Text> enter roll number </Text> : null
      }
      <TextInputComponent
        placeholder={strings.ENTER_YOUR_ADDRESS}
        placeholderTextColor={colors.blackC}
        onchangeText={(value) => setAddress(value)}
        valuee={address}
      />
      {
        addressError ? <Text> enter address</Text> : null
      }
      <TextInputComponent
        placeholder={strings.ENTER_YOUR_MOBILE_NUMBER}
        placeholderTextColor={colors.blackC}
        onchangeText={(value) => setPhoneNumber(value)}
        valuee={phone}
        maxLength={10}
        keyboardType={'numeric'}
      />
      {
        phoneError ? <Text> enter mobile number</Text> : null
      }
      <ButtonComponent buttonText={USerID ? strings.UPDATE : strings.SUBMIT} onpress={USerID ? EditDetails : submit} dynamicStyle={true} />
    </SafeAreaView>
  )
}