import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../pages/home/index';
import Monitoring from '../pages/monitoring';
import Setting from '../pages/setting';
import {IconSet, IconCloud, IconBxDetail} from '@/assets/iconfont';

import {RootStackList} from './type';
const Tab = createBottomTabNavigator<RootStackList>();
const ButtonTabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          gestureEnabled: true,
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: '详情',
            tabBarIcon: () => <IconCloud />,
          }}
        />
        <Tab.Screen
          name="Monitoring"
          component={Monitoring}
          options={{
            tabBarLabel: '详情',
            tabBarIcon: () => <IconBxDetail />,
          }}
        />
        <Tab.Screen
          name="Setting"
          component={Setting}
          options={{
            tabBarLabel: '详情2',
            tabBarIcon: () => <IconSet />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default ButtonTabs;
