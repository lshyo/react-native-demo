import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
const Location = () => {
  const dipatch = useDispatch();

  return (
    <View style={[styles.locationContent]}>
      <Text>loactionPages</Text>
      <Text onPress={() => dipatch({type: 'toggleLocationConfig'})}>取消3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  locationContent: {
    flex: 1,
    backgroundColor: '#ebebeb',
  },
});
export default Location;
