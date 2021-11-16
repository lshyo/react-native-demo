import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React from 'react';
import Block from '@/components/Block';
import SplitLine from '@/components/SplitLine/SplitLine';
import {size, layout} from '../../config/style';
import {IconWeatherSunny, IconRichu, IconRila} from '@/assets/iconfont';
import {useDispatch, useSelector} from 'react-redux';
const WeatherData = [
  {
    id: '1',
    number: 111,
    unit: 'hpa',
    title: '气压',
  },
  {
    id: '2',
    number: 111,
    unit: 'hpa',
    title: '气压',
  },
  {
    id: '3',
    number: 111,
    unit: 'hpa',
    title: '气压',
  },
  {
    id: '4',
    number: 111,
    unit: 'hpa',
    title: '气压',
  },
  {
    id: '5',
    number: 111,
    unit: 'hpa',
    title: '气压',
  },
  {
    id: '6',
    number: 111,
    unit: 'hpa',
    title: '气压',
  },
  {
    id: '7',
    number: 111,
    unit: 'hpa',
    title: '气压',
  },
];

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state);
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView>
        <Block title="实时天气">
          <View style={{flexDirection: 'row', flex: 1}}>
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
              <Text
                style={{...size.fontH1, ...layout.space}}
                onPress={() => {
                  dispatch({type: 'test'});
                }}>
                13
              </Text>
              <Text style={{...size.fontH2, ...layout.space}}>晴</Text>
              <Text style={size.normal}>最近的降雨带在北边37公里外.- {JSON.stringify(data)}</Text>
            </View>
            <View style={{width: 50, justifyContent: 'center'}}>
              <IconWeatherSunny size={38} />
            </View>
          </View>
        </Block>

        <Block title="今日一览">
          <View style={{flexDirection: 'column', flex: 1}}>
            <Text style={{...size.fontH1, marginBottom: 20}}>
              14 <Text style={size.unit}>12-13</Text>
            </Text>
            <View style={{flexDirection: 'row', marginBottom: 15}}>
              <View style={{flexDirection: 'column', marginRight: 20}}>
                <Text style={size.small}>日间</Text>
                <Text style={{...size.small, fontWeight: 'bold'}}>
                  晴间多云
                </Text>
              </View>
              <View style={{flexDirection: 'column', marginRight: 20}}>
                <Text style={size.small}>夜间</Text>
                <Text style={{...size.small, fontWeight: 'bold'}}>
                  晴间多云
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', marginBottom: 15}}>
              <View style={{flexDirection: 'column', marginRight: 20}}>
                <Text style={size.small}>湿度</Text>
                <Text style={{...size.small, fontWeight: 'bold'}}>66%</Text>
              </View>
              <View style={{flexDirection: 'column', marginRight: 20}}>
                <Text style={size.small}>空气质量</Text>
                <Text style={{...size.small, fontWeight: 'bold'}}>优</Text>
              </View>
              <View style={{flexDirection: 'column', marginRight: 20}}>
                <Text style={size.small}>降雨概率</Text>
                <Text style={{...size.small, fontWeight: 'bold'}}>0%</Text>
              </View>
            </View>
            <SplitLine />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <IconRichu size={22} style={{marginRight: 10}} />
                <View
                  style={{
                    flexDirection: 'column',
                    display: 'flex',
                  }}>
                  <Text style={size.smaller}>日出</Text>
                  <Text style={size.smaller}>6:22</Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <IconRila size={22} style={{marginRight: 10}} />
                <View
                  style={{
                    flexDirection: 'column',
                    display: 'flex',
                  }}>
                  <Text style={size.smaller}>日落</Text>
                  <Text style={size.smaller}>18:22</Text>
                </View>
              </View>
            </View>
          </View>
        </Block>

        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            paddingLeft: 15,
            paddingRight: 15,
          }}>
          {WeatherData.map((item: any) => {
            const {title, number, unit} = item;
            return (
              <View
                key={item.id}
                style={{
                  width: '48%',
                }}>
                <Block title={title} style={{marginRight: 0, marginLeft: 0}}>
                  <View style={{flex: 1, justifyContent: 'flex-end'}}>
                    <Text style={{marginBottom: 5}}>
                      <Text style={{...size.fontH1}}>{number}</Text>
                      <Text style={size.unit}>{unit}</Text>
                    </Text>
                    <Text style={size.fontH2}>{title}</Text>
                  </View>
                </Block>
              </View>
            );
          })}
        </View>
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
