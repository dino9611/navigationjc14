import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Icon} from 'native-base'
import {Text} from 'react-native';
import HomeStack from './homestack'
import {FeedScreen} from './../screen'

const Tab=createBottomTabNavigator()

function HomeTab() {
    return (
      <Tab.Navigator
        screenOptions={({route})=>({
            tabBarIcon:({focused,color})=>{
                let iconName;
                let type='Ionicons'
                if (route.name === 'HomeStack') {
                    iconName = focused? 'home': 'home-outline';
                } else if (route.name === 'Feed') {
                    iconName = focused ? 'profile' : 'profile';
                    type='AntDesign'
                }
                // You can return any component that you like here!
                return <Icon name={iconName} type={type} style={{fontSize:20,color}}  />;
            },
            tabBarLabel:({focused,color})=>{
              let LabelName;
              if (route.name === 'HomeStack') {
                  LabelName = 'Home'
              } else if (route.name === 'Feed') {
                  LabelName = 'Feed';
              }
              // You can return any component that you like here!
              return <Text style={{color,fontSize:12}}>{LabelName}</Text>;
            }
        })}
  
        tabBarOptions={{
            activeTintColor: 'salmon',
            inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="HomeStack" component={HomeStack } />
        <Tab.Screen name="Feed" component={FeedScreen} />
      </Tab.Navigator>
    );
}

export default HomeTab