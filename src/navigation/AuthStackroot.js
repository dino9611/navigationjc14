import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import {LoginScreen,RegisterScreen} from '../screen'

const AuthStack=createStackNavigator()

const AuthStackRoot=()=>{

    return(
      <AuthStack.Navigator headerMode='none'>
        <AuthStack.Screen name='Login' component={LoginScreen} />
        <AuthStack.Screen name='Register' component={RegisterScreen} />
      </AuthStack.Navigator>
    )
}

export default AuthStackRoot