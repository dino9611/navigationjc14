import React from 'react';
import { View, Text, Button } from 'react-native';

function FeedScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Feed Screen</Text>
        <Button
          title='ke details '
          onPress={()=>navigation.navigate('HomeStack',{screen:'Details',params:{nama:'darifeed'}})}
        />
      </View>
    );
}

export default FeedScreen