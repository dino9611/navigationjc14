import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer'
import {Icon} from 'react-native-elements'
import {Text} from 'react-native';
import Hometab from './hometab'
import {SettingScreen,} from '../screen'


const Drawer=createDrawerNavigator()


export default ProfileDrawer=()=>{
    return(
        <Drawer.Navigator
            initialRouteName='Hometab'
            drawerPosition='right'
            drawerType='slide'
            screenOptions={({route})=>({
                drawerIcon:({focused,color,size})=>{
                    let iconName;
                    // console.log(route.name)
                    if (route.name === 'Hometab') {
                        iconName = focused
                            ? 'user'
                            : 'user';
                        // return null
                    } else if (route.name === 'Setting') {
                        iconName = focused ? 'cog' : 'cog';
                    }
                    // You can return any component that you like here!
                    // console.log(color)
                    return <Icon name={iconName} type='font-awesome' size={size}  color={color} />;
                },
                drawerLabel:({focused,color,size})=>{
                  return <Text style={{color}}>{route.name}</Text>;
              },
            })}

            drawerContentOptions={{
                activeTintColor:'tomato',
                inactiveTintColor:'gray'
            }}
        >
            <Drawer.Screen name='Hometab' component={Hometab} options={{swipeEnabled:false}} />
            <Drawer.Screen name='Setting' component={SettingScreen} />
        </Drawer.Navigator>
    )
}
