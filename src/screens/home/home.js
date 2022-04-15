import { View, Text,  TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import homeStyle from './homeStyle';
import navigationString from '../../navigations/navigationString';
import ImagePath from '../../constants/imagePath';
import { useSelector } from 'react-redux';
import actions from '../../redux/actions';





export default function Home({ navigation }) {

  const list = useSelector((state) => state.dataDetails.detailsList)
  console.log('List+++++', list)

  const editDetails = (index) => {
    // console.log("id " ,id)
    navigation.navigate(navigationString.ADD_DETAILS, { userId: index })
    // console.log(index)
  }
 



  return (
    <View style={homeStyle.homeView}>


      {/* <Image
        source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRao71aypm3fhKKbyl7eEG7Mk_lOeWDGCYliwkXsoZRuKhoVIhv3PesR9ms03fvOX3tAKI&usqp=CAU" }}
        style={{
          height: moderateScale(80),
          width: moderateScale(80),
          borderRadius: moderateScale(40)
        }}
      /> */}



      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={homeStyle.homeView}>
          <Text style={homeStyle.homeText}>Home</Text>
        </View>
        <TouchableOpacity onPress={actions.Logout}>
          <View>
            <Text style={homeStyle.logOutText}>LogOut</Text>
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {
          list.map((elem, index) => {
            return (
              <View key={index} style={homeStyle.detailsMain}>
                <View>
                  <Text style={homeStyle.savedData}> Name: {elem.name}</Text>
                  <Text style={homeStyle.savedData} > Age: {elem.age}</Text>
                  <Text style={homeStyle.savedData} > RollNo: {elem.rollno}</Text>
                  <Text style={homeStyle.savedData} > Address: {elem.address}</Text>
                  <Text style={homeStyle.savedData} > Mobile Number: {elem.phone}</Text>
                </View>
                <View style={homeStyle.editMainView}>

                  <View >
                    <TouchableOpacity onPress={() => actions.deleteData(elem.dataId)}>
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