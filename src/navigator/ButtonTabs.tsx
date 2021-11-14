import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Home from '../pages/home/index';
import Monitoring from '../pages/monitoring';
import Setting from '../pages/setting';
import {IconSet, IconCloud, IconBxDetail} from '@/assets/iconfont';

import {RootStackList} from './type';
const TabTop = createMaterialTopTabNavigator<RootStackList>();
const ButtonTabs = () => {
  return (
    <TabTop.Navigator
      style={{
        width: '100%',
        backgroundColor: '#fff',
      }}
      tabBarPosition="bottom"
      screenOptions={{
        // tabBarIndicator: () => null,
        tabBarPressColor: 'transparent',
        tabBarIndicatorStyle: {
          borderRadius: 50,
          backgroundColor: '#fff',
          padding: 10,
          width: 40,
          height: 40,
          marginBottom: 4,
          marginLeft: 10,
        },
        tabBarStyle: {
          borderRadius: 40,
          marginLeft: 15,
          marginTop: 15,
          marginBottom: 15,
          width: 180,
          elevation: 0, // android 阴影
          backgroundColor: '#f6f6f6',
        },
      }}>
      <TabTop.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: () => <IconCloud />,
        }}
      />
      <TabTop.Screen
        name="Monitoring"
        component={Monitoring}
        options={{
          tabBarLabel: () => <IconBxDetail />,
        }}
      />
      <TabTop.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarLabel: () => <IconSet />,
        }}
      />
    </TabTop.Navigator>
  );
};
export default ButtonTabs;
