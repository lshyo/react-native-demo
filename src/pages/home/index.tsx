import {Text, View, Button} from 'react-native';
import React from 'react';
interface Props {
  navigation: any;
}
const Home = (props: Props) => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Text>Home Screen</Text>
  </View>
);
export default Home;
