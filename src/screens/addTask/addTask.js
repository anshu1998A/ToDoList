import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react';
import TextInputComponent from '../../components/textInput';
import colors from '../../styles/colors';
import navigationString from '../../navigations/navigationString';
import ButtonComponent from '../../components/button';
import { useDispatch } from 'react-redux';
import { saveEmployeeDetails } from '../../redux/actions/addDetails';


export default function AddTask({ navigation, route }) {



  const id = route?.params?.id
  console.log("id",id)


  const [name, setName] = useState(id?.name ? id?.name :'')
  const [age, setAge] = useState(id?.age ? id?.age :'')
  const [address, setAddress] = useState(id?.address ? id?.address :'')
  const [rollno, setRollno] = useState(id?.rollNo ? id?.rollNo :'')
  const [phone, setPhoneNumber] = useState(id?.mobileNum ? id?.mobileNum :'')

  const [nameError, setNameError] = useState(false)
  const [ageError, setAgeErro] = useState(false)
  const [addressError, setAddressError] = useState(false)
  const [rollnoError, setRollnoError] = useState(false)
  const [phoneError, setPhoneNumberError] = useState(false)


  const data = { name, age, rollno, phone, address }

  // console.log(data)

  const dispatch = useDispatch()

  const EditDetails = () => {
    if (name.length === 0) {
      setNameError(true)
    }
    else if (age.length === 0) {
      setAgeErro(true)
    }
    else if (rollno.length === 0) {
      setAgeErro(true)
    }
    else if (phone.length === 0) {
      setAgeErro(true)
    }
    else if (address.length === 0) {
      setAgeErro(true)
    }
    else if (address != 0) {
      dispatch
      navigation.navigate(navigationString.HOME)
    }

  }
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
        onchangeText={(value) => setName(value)}
        valuee={name}
      />
      {
        nameError ? <Text> enter name</Text> : null
      }
      <TextInputComponent
        placeholder={'Enter your age'}
        placeholderTextColor={colors.blackC}
        onchangeText={(value) => setAge(value)}
        valuee={age}
      />
      {
        ageError ? <Text> enter age </Text> : null
      }
      <TextInputComponent
        placeholder={'Enter rollNo.'}
        placeholderTextColor={colors.blackC}
        onchangeText={(value) => setRollno(value)}
        valuee={rollno}
      />
      {
        rollnoError ? <Text> enter roll number </Text> : null
      }
      <TextInputComponent
        placeholder={'Enter address'}
        placeholderTextColor={colors.blackC}
        onchangeText={(value) => setAddress(value)}
        valuee={address}
      />
      {
        addressError ? <Text> enter address</Text> : null
      }
      <TextInputComponent
        placeholder={'Enter mobile number'}
        placeholderTextColor={colors.blackC}
        onchangeText={(value) => setPhoneNumber(value)}
        valuee={phone}
      />
      {
        phoneError ? <Text> enter mobile number</Text> : null
      }
      <ButtonComponent buttonText={id? "Update": 'Submit'} onpress={id ? EditDetails : submit} />
    </View>
  )
}