import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import homeStyle from './homeStyle';
import navigationString from '../../navigations/navigationString';
import ImagePath from '../../constants/imagePath';
import ButtonComponent from '../../components/button';
import { useDispatch, useSelector } from 'react-redux';
import { Logout } from '../../redux/actions/auth';
import dataDetails from '../../redux/reducers/detailsReducer';
import { deleteData } from '../../redux/actions/addDetails';




export default function home({ navigation }) {

  const dispatch = useDispatch();
  const list = useSelector((state) => state.dataDetails.detailsList)

  const editDetails = (id, index) => 
  {
    // console.log("id " ,id)
    navigation.navigate(navigationString.ADD_DETAILS,{id:id,index})
    console.log(index)
    
  }

  return (
    <View style={homeStyle.homeView}>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: '700', }}>Home</Text>
        </View>
        <TouchableOpacity onPress={() => dispatch(Logout())}>
          <View style={{ justifyContent: 'center', alignItems: 'center', marginRight: 10 }}>
            <Text style={homeStyle.logOutText}>LogOut</Text>
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {
          list.map((elem, index) => {
            return (
              <View key={elem.id} style={homeStyle.detailsMain}>
                <View>
                  <Text style={{ marginLeft: 10, marginBottom: 5 }}> Name: {elem.name}</Text>
                  <Text style={{ marginLeft: 10, marginBottom: 5 }} > Age: {elem.age}</Text>
                  <Text style={{ marginLeft: 10, marginBottom: 5 }} > RollNo: {elem.rollno}</Text>
                  <Text style={{ marginLeft: 10, marginBottom: 5 }} > Address: {elem.address}</Text>
                  <Text style={{ marginLeft: 10, marginBottom: 5 }} > Mobile Number: {elem.phone}</Text>
                </View>
                <View style={homeStyle.editMainView}>

                  <View >
                    <TouchableOpacity onPress={() => dispatch(deleteData(elem.id))}>
                      <Image source={ImagePath.delete} style={homeStyle.deleteButton} />
                      <Image />
                    </TouchableOpacity>
                  </View>
                  {/* console.log(elem) */}
                  <TouchableOpacity onPress={() => editDetails(elem, index)} >

                    <View style={homeStyle.editTextView}>
                      <Text style={homeStyle.editText}>Edit</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>

            )
          })
        }
      </ScrollView>

      <TouchableOpacity onPress={() => navigation.navigate(navigationString.ADD_DETAILS)}>
        <View>
          <Image source={ImagePath.addImage} style={homeStyle.addButton} />
        </View>
      </TouchableOpacity>


    </View>

  )
}