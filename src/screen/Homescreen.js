import React,{useContext} from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContext} from './../context'
import {connect} from 'react-redux'
import {Logout} from './../redux/Actions'
function HomeScreen({navigation,Auth,Logout}) {

  // const {datauser,setdatauser}=useContext(AuthContext)

  const OnLogOutpress=async ()=>{
    try {
      await AsyncStorage.removeItem('nama')
      Logout()
      // setdatauser({ nama:'',islogin:false})
    } catch (error) {
      
    }
  }

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen  {Auth.nama}</Text>
        <Button
          title='to details dino'
          onPress={()=>navigation.navigate("Details")}
        />
        <Button
          title='to details robin'
          onPress={()=>navigation.navigate("Details",{nama:"robin"})}
        />
         <Button
          title='to logout'
          onPress={OnLogOutpress}
        />
      </View>
    );
}

const Mapstatetoprops=(state)=>{
  return{
      Auth:state.Auth
  }
}
export default connect(Mapstatetoprops,{Logout}) (HomeScreen)