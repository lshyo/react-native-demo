import {Text, View, Button, StyleSheet} from 'react-native';
import React from 'react';
import Block from '@/components/Block';

const Home = () => (
  <Block title="实时天气">
    <Text>13</Text>
  </Block>
);

const styles = StyleSheet.create({
  main: {
    flexDirection: 'column',
  },
});

export default Home;
