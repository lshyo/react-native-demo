import {
  Text,
  View,
  Button,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React from 'react';
import Block from '@/components/Block';
import {size, layout} from '../../config/style';
import {IconWeatherSunny} from '@/assets/iconfont';
const Home = () => {
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView>
        <Block title="实时天气">
          <View style={{flexDirection: 'row', flex: 1}}>
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
              <Text style={{...size.lageNumber, ...layout.space}}>13</Text>
              <Text style={{...size.lage2, ...layout.space}}>晴</Text>
              <Text style={size.normal}>最近的降雨带在北边37公里外.</Text>
            </View>
            <View style={{width: 50, justifyContent: 'center'}}>
              <IconWeatherSunny size={38} />
            </View>
          </View>
        </Block>

        <Block title="气压">
          <View style={{flex: 1, justifyContent: 'flex-end'}}>
            <Text style={{marginBottom: 5}}>
              {' '}
              <Text style={{...size.lageNumber}}>1110</Text>{' '}
              <Text style={size.unit}>hPa</Text>
            </Text>
            <Text style={size.lage2}>气压</Text>
          </View>
        </Block>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});

export default Home;
