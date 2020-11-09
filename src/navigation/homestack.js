import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Homescreen,Detailsscreen} from './../screen'

const Stack = createStackNavigator();


function HomeStack(){
    return(
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name="Home" component={Homescreen}/>
        <Stack.Screen name="Details" component={Detailsscreen} initialParams={{nama:'yoha'}}  />
      </Stack.Navigator> 
    )
}

export default HomeStack