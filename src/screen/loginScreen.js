import React,{useContext,useState} from 'react';
import { View, Text } from 'react-native';
import {AuthContext} from './../context'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Input,Button,} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

function Login({navigation}) {

    // const {datauser,setdatauser}=useContext(AuthContext)
    const [loading,setloading]=useState(false)
    const [secure,setsecure]=useState(true)
    const [inputlog,setinputlog]=useState('')
    // console.log(inputlog)

    const onLoginPress=()=>{
      AsyncStorage.setItem('nama',inputlog).then(()=>{
        // setdatauser({islogin:true,nama:inputlog})
      })
    }

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',paddingHorizontal:20 }}>
        <Text style={{fontSize:35,color:'tomato'}}>Login</Text>
        <Input
          placeholder='Username'
          inputStyle={{color:'tomato'}}
          value={inputlog}
          inputContainerStyle={{borderColor:'tomato'}}
          leftIcon={{type: 'font-awesome', name: 'user',color:'tomato' }}
          onChangeText={(text)=>setinputlog(text)}
        />
        <Input
          placeholder='password'
          inputStyle={{color:'tomato'}}
          secureTextEntry={secure}
          inputContainerStyle={{borderColor:'tomato'}}
          leftIcon={{type: 'font-awesome', name: 'lock',color:'tomato' }}
          rightIcon={{type:'font-awesome', name:'key',color:secure?'gray':'tomato',onPress:()=>setsecure(!secure)}}
        />
        <Button
          title="Login"
          loading={loading}
          containerStyle={{width:'100%'}}
          buttonStyle={{backgroundColor:'tomato'}}
          onPress={onLoginPress}
        />
      </View>
    );
}

export default Login