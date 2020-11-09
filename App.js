import 'react-native-gesture-handler';
import React,{useState,useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeDrawer from './src/navigation/HomeDrawer'
import AuthStackRoot from './src/navigation/AuthStackroot'
import {AuthContext} from './src/context'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SplashScreen} from './src/screen' 
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import Reducers from './src/redux/reducers'
import AppMain from './Appmain'

const App=()=> {
  // ================= cara context ================
  // const [datauser,setdatauser]=useState({
  //   nama:'',
  //   islogin:false
  // })

  // const [loading,setloading]=useState(true)

  // useEffect(()=>{
  //   AsyncStorage.getItem('nama')
  //   .then((value)=>{
  //     if(value !==null){
  //       setdatauser({
  //         nama:value,
  //         islogin:true
  //       })
  //       // setloading(false)
  //     }
  //   }).catch(()=>{
  //       // setloading(false)
  //   }).finally(()=>{
  //     setloading(false)
  //   })
  // },[])//component didmout


  // if(loading){
  //   return(
  //     <SplashScreen/>
  //   )
  // }
  
  const store=createStore(Reducers)

  return (

    <Provider store={store}>
      <AppMain/>
    </Provider>




    // ===================== cara context =====================
    // <AuthContext.Provider
    //   value={
    //     {
    //       datauser:datauser,
    //       setdatauser:setdatauser
    //     }
    //   }
    // >
    //   <NavigationContainer>
    //     {
    //       datauser.islogin?

    //       <HomeDrawer/>
    //       :
    //       <AuthStackRoot/>
    //     }
    //   </NavigationContainer>
    // </AuthContext.Provider>
  );
};


export default App;

