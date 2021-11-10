import React, {useEffect} from 'react';
import {View, StyleSheet, Text, Alert} from 'react-native';
interface BlockProps {
  children: React.ReactNode;
  title?: string;
}
const Block: React.FC<BlockProps> = props => {
  const {title} = props;
  return (
    <View style={{...styles.container}}>
      {title && <Text style={styles.title}>{title}</Text>}
      <View style={{flex: 1}}>{props.children && props.children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 12,
    color: '#000',
    marginBottom: 20,
  },
  container: {
    minHeight: 120,
    marginTop: 15,
    marginBottom: 0,
    marginLeft: 15,
    marginRight: 15,
    paddingTop: 15,
    paddingRight: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    flex: 1,
    flexDirection: 'column',
  },
});
export default Block;
