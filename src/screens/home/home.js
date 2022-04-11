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
          list.map((elem) => {
            return (
              <View key={elem.id} style={{ backgroundColor: '#c9c8c5', borderRadius:9, marginVertical: 10, borderWidth: 1.5, marginHorizontal: 10, flexDirection:'row', justifyContent:'space-between' }}>
                <View>
                  <Text style={{ marginLeft: 10,  }}> Name: {elem.name}</Text>
                  <Text style={{ margin: 5 }} > Age: {elem.age}</Text>
                  <Text style={{ margin: 5 }} > RollNo: {elem.rollNo}</Text>
                  <Text style={{ margin: 5 }} > Address: {elem.address}</Text>
                  <Text style={{ margin: 5 }} > Mobile Number: {elem.mobileNum}</Text>
                </View>
                <View>
                  <TouchableOpacity onPress={() => dispatch(deleteData(elem.id))}>
                  <Image source={ImagePath.delete} style={{height:40,width:40, marginRight:10, borderRadius:20, marginTop:10}} />
                  <Image />
                  </TouchableOpacity>
                </View>
              </View>

            )
          })
        }
      </ScrollView>

      <TouchableOpacity onPress={() => navigation.navigate(navigationString.ADD_DETAILS)}>
        <View>
          <Image source={ImagePath.addImage} style={{ height: 40, width: 40, borderRadius: 20, alignSelf: 'center', marginBottom: 30 }} />
        </View>
      </TouchableOpacity>


    </View>

  )
}