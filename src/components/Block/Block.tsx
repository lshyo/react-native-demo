import React, {useEffect} from 'react';
import {View, StyleSheet, Text, ViewStyle} from 'react-native';
import {layout} from '../../config/style';

interface BlockProps {
  style?: ViewStyle;
  children: React.ReactNode;
  title?: string;
}
const Block: React.FC<BlockProps> = props => {
  const {title} = props;
  return (
    <View style={{...styles.container, ...props.style}}>
      {title && <Text style={styles.title}>{title}</Text>}
      <View style={{flex: 1}}>{props.children && props.children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 12,
    color: '#606060',
    marginBottom: 20,
  },
  container: {
    ...layout.margin,
    minHeight: 120,
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
