import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeDrawer from './src/navigation/HomeDrawer'


const App=()=> {
  return (
    <NavigationContainer>
      <HomeDrawer/>
    </NavigationContainer>
  );
};


export default App;

//  options={
        //    ({ route,navigation }) => ({ 
        //       headerRight: () => (
        //         <Button
        //           onPress={() => alert('This is a button!')}
        //           title="Info"
        //           color="#000"
        //         />
        //       ),
        //       headerLeft:()=>{
        //         return(
        //           <Button
        //             onPress={() => navigation.goBack()}
        //             title="back"
        //             color="#000"
        //           />
        //         )
        //       },
        //       title: route.params.nama,
        //       headerStyle:{
        //         backgroundColor: route.params.nama ==='yoha'? 'tomato':'blue',
                
        //       },
        //       headerTintColor:'white' 
        //     })}