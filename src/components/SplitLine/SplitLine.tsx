import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
interface Props {}
const SplitLine = (props: Props) => {
  return <View style={styles.line} />;
};
const styles = StyleSheet.create({
  line: {
    height: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#ebebeb',
    marginTop: 10,
    marginBottom: 10,
  },
});
export default SplitLine;
