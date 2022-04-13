import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react';
import TextInputComponent from '../../components/textInput';
import colors from '../../styles/colors';
import navigationString from '../../navigations/navigationString';
import ButtonComponent from '../../components/button';
import { useDispatch } from 'react-redux';
import { saveEmployeeDetails } from '../../redux/actions/addDetails';
import actions from '../../redux/actions';


export default function AddTask({ navigation, route }) {



  const id = route?.params?.id



  const [name, setName] = useState(id?.name ? id?.name :'')
  const [age, setAge] = useState(id?.age ? id?.age :'')
  const [address, setAddress] = useState(id?.address ? id?.address :'')
  const [rollno, setRollno] = useState(id?.rollno ? id?.rollno :'')
  const [phone, setPhoneNumber] = useState(id?.phone ? id?.phone :'')

  const [nameError, setNameError] = useState(false)
  const [ageError, setAgeErro] = useState(false)
  const [addressError, setAddressError] = useState(false)
  const [rollnoError, setRollnoError] = useState(false)
  const [phoneError, setPhoneNumberError] = useState(false)

  console.log("my params",route?.params?.index)
  console.log("my id", route?.params?.id)

  const data = { name, age, rollno, phone, address }

  // console.log(data)

  const dispatch = useDispatch()

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

    actions.editData({name, age,rollno,address,phone, index: route.params.index, id})

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