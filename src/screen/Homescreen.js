import React from 'react';
import { View, Text, Button } from 'react-native';

function HomeScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title='to details dino'
          onPress={()=>navigation.navigate("Details")}
        />
        <Button
          title='to details robin'
          onPress={()=>navigation.navigate("Details",{nama:"robin"})}
        />
      </View>
    );
}

export default HomeScreen