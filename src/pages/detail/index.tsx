import {Text, View} from 'react-native';
import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {RootStackList} from '@/navigator/type';
const Detail = (props: {route: RouteProp<RootStackList>}) => {
  const {route} = props;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Detail ~~~~</Text>
    </View>
  );
};
export default Detail;
