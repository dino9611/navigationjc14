import React from 'react';
import { View, Text, Button } from 'react-native';

function ProfileScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
        <Text>Profile Screen</Text>
        <Button
            title='open drawer'
            onPress={()=>navigation.openDrawer()}
        />
      </View>
    );
}

export default ProfileScreen