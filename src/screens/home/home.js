import { View, Text, TouchableOpacity, Image, FlatList, SafeAreaView } from 'react-native'
import React from 'react'
import homeStyle from './homeStyle';
import navigationString from '../../navigations/navigationString';
import ImagePath from '../../constants/imagePath';
import { useSelector } from 'react-redux';
import actions from '../../redux/actions';
import strings from '../../constants/lang';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { moderateScale } from '../../styles/responsiveSize';

export default function Home({ navigation }) {

  const list = useSelector((state) => state.dataDetails.detailsList)
  console.log('List+++++', list)

  const editDetails = (index) => {
    // console.log("id " ,id)
    navigation.navigate(navigationString.ADD_DETAILS, { userId: index })
    // console.log(index)
  }
  const signout = async () => {
    try {
      await GoogleSignin.signOut()
      actions.Logout()
    }
    catch (error) {

    }
  }
  const about = () => {
    navigation.navigate(navigationString.ABOUT)
  }

  const showDetails = ({ item, index }) => {
    const elem = item
    return (
      <View key={index} style={homeStyle.detailsMain}>
        <View style={{marginTop: moderateScale(20)}}>
          <Text style={homeStyle.savedData}> {strings.NAME}: {elem.name}</Text>
          <Text style={homeStyle.savedData} > {strings.AGE}: {elem.age}</Text>
          <Text style={homeStyle.savedData} > {strings.ROLLNO}: {elem.rollno}</Text>
          <Text style={homeStyle.savedData} > {strings.ADDRESS}: {elem.address}</Text>
          <Text style={homeStyle.savedData} > {strings.MOBILE_NUMBER}: {elem.phone}</Text>
        </View>
        <View style={homeStyle.editMainView}>

          <View >
            <TouchableOpacity onPress={() => actions.deleteData(elem.dataId)}>
              <Image source={ImagePath.delete} style={homeStyle.deleteButton} />
              <Image />
            </TouchableOpacity>
          </View>
          {/* console.log(elem) */}
          <View>

          <TouchableOpacity onPress={() => editDetails(elem, index)} >
            
            <Image source={ImagePath.edit} style={homeStyle.editButton} />
              <Image />
          </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView style={homeStyle.homeView}>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={homeStyle.homeView}>
          <Text style={homeStyle.homeText}>{strings.HOME}</Text>
        </View>

        <TouchableOpacity onPress={about}>
          <View>
            <Text style={homeStyle.logOutText}>About</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={signout}>
          <View>
            <Text style={homeStyle.logOutText}>{strings.LOGOUT}</Text>
          </View>
        </TouchableOpacity>
      </View>

      <FlatList
        data={list}
        renderItem={showDetails} />


      <TouchableOpacity onPress={() => navigation.navigate(navigationString.ADD_DETAILS)}>
        <View>
          <Image source={ImagePath.addImage} style={homeStyle.addButton} />
        </View>
      </TouchableOpacity>


    </SafeAreaView>

  )
}