import 'react-native-gesture-handler';
import React,{useState,useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeDrawer from './src/navigation/HomeDrawer'
import AuthStackRoot from './src/navigation/AuthStackroot'
import {AuthContext} from './src/context'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SplashScreen} from './src/screen' 
import {connect} from 'react-redux'
import {Login} from './src/redux/Actions'

const AppMain=(props)=> {

//   const [datauser,setdatauser]=useState({
//     nama:'',
//     islogin:false
//   })

  const [loading,setloading]=useState(true)

  useEffect(()=>{
    AsyncStorage.getItem('nama')
    .then((value)=>{
      if(value !==null){
        props.Login(value)
        // setloading(false)
      }
    }).catch(()=>{
        // setloading(false)
    }).finally(()=>{
      setloading(false)
    })
  },[])//component didmout


  if(loading){
    return(
      <SplashScreen/>
    )
  }
  
  return (

      <NavigationContainer>
        {
          props.Auth.islogin?

          <HomeDrawer/>
          :
          <AuthStackRoot/>
        }
      </NavigationContainer>
 
  );
};


const Mapstatetoprops=(state)=>{
    return{
        Auth:state.Auth
    }
}

export default connect(Mapstatetoprops,{Login})(AppMain);
