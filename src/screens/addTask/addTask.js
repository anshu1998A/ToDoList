import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react';
import TextInputComponent from '../../components/textInput';
import colors from '../../styles/colors';
import navigationString from '../../navigations/navigationString';
import ButtonComponent from '../../components/button';
import { useDispatch } from 'react-redux';
import { saveEmployeeDetails } from '../../redux/actions/addDetails';


export default function AddTask({ navigation }) {

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [address, setAddress] = useState('')
  const [rollno, setRollno] = useState('')
  const [phone, setPhoneNumber] = useState('')

  const [nameError, setNameError] = useState(false)
  const [ageError, setAgeErro] = useState(false)
  const [addressError, setAddressError] = useState(false)
  const [rollnoError, setRollnoError] = useState(false)
  const [phoneError, setPhoneNumberError] = useState(false)


  const data = { name, age, rollno, phone, address }


  const dispatch = useDispatch()
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
              console.log(data)
              dispatch(saveEmployeeDetails(data))
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
    <View style={{ justifyContent: 'center', alignSelf: 'center' }} >
      <TextInputComponent
        placeholder={'Enter your Name'}
        placeholderTextColor={colors.blackC}
        onchangeText ={(value) => setName(value)}
      />
      {
        nameError ? <Text> enter name</Text> : null
      }
      <TextInputComponent
        placeholder={'Enter your age'}
        placeholderTextColor={colors.blackC}
        onchangeText ={(value) => setAge(value)}
      />
      {
        ageError ? <Text> enter age </Text> : null
      }
      <TextInputComponent
        placeholder={'Enter rollNo.'}
        placeholderTextColor={colors.blackC}
        onchangeText ={(value) => setRollno(value)}
      />
      {
        rollnoError ? <Text> enter roll number </Text> : null
      }
      <TextInputComponent
        placeholder={'Enter address'}
        placeholderTextColor={colors.blackC}
        onchangeText ={(value) => setAddress(value)}
      />
       {
        addressError ? <Text> enter address</Text> : null
      }
      <TextInputComponent
        placeholder={'Enter mobile number'}
        placeholderTextColor={colors.blackC}
        onchangeText ={(value) => setPhoneNumber(value)}
      />
{
         phoneError ? <Text> enter mobile number</Text> : null
      }
      <ButtonComponent buttonText='Submit' onpress={submit} />
    </View>
  )
}