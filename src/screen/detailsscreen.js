import React from 'react';
import { View, Text, Button } from 'react-native';

function DetailsScreen({navigation,route}) {

    const {nama}=route.params
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen {nama}</Text>
        <Button
          title='Details again'
          onPress={
            ()=>{
              navigation.push("Details")
            }
          }
        />
        <Button
          title="Go back to first screen in stack"
          onPress={() => navigation.popToTop()}
        />
      </View>
    );
}
export default DetailsScreen